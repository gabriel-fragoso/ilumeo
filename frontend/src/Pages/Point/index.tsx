import { RootState } from "../../store/reducers/rootReducer";
import { axiosInstance as axios } from "../../services/api";
import { setType } from "../../store/actions/pointSlice";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../Components/Button";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import moment from "moment/moment";
import {
  GroupText,
  GroupHours,
  Box,
  Container,
  Text,
  GroupDays,
  Day,
  Hour,
  Content,
} from "./styles";

type TimeLogValues = {
  code: string;
};

type ApiResponse = {
  id: string;
  type: string;
  timestamp: Date;
  updatedAt: Date;
  createdAt: Date;
  timeDiff: string;
  user: {
    code: string;
  };
};

export function Point() {
  const [points, setPoints] = useState();
  const [userPoint, setUserPoint] = useState<ApiResponse[]>();

  const { handleSubmit } = useForm<TimeLogValues>();

  const userId = useSelector((state: RootState) => state.user.id);
  const type = useSelector((state: RootState) => state.type.type);
  const dispatch = useDispatch();
  const id = userId?.id;

  function apiResponse() {
    axios.get(`/users/${id}/points`).then((response: AxiosResponse) => {
      setUserPoint(response.data);
    });
  }

  useEffect(() => {
    apiResponse();
  }, []);

  const onSubmit: SubmitHandler<TimeLogValues> = (data) => {
    if (type !== "Entrada") {
      axios
        .post("/points", {
          userId: id,
          type: "Entrada",
        })
        .then((response: AxiosResponse) => {
          const typeId = response.data.id;
          const type = response.data.type;

          dispatch(setType(type));
          setPoints(typeId);
        });
    } else {
      axios
        .put(`/points/${points}`, {
          type: "Saida",
        })
        .then((response: AxiosResponse) => {
          apiResponse();
          const type = response.data.type;
          dispatch(setType(type));
        });
    }
  };

  const dates =
    userPoint &&
    userPoint.map((item) => ({
      createdAt: new Date(item.createdAt),
      updatedAt: new Date(item.updatedAt),
    }));

  const code: any =
    userPoint &&
    userPoint.map((item) => ({
      code: item?.user?.code,
    }));

  const differences =
    dates &&
    dates.map((item) => {
      const diff = item.updatedAt.getTime() - item.createdAt.getTime();
      return Math.abs(diff);
    });

  const totalTime: any =
    differences && differences.reduce((total, diff) => total + diff, 0);

  const totalMinutes = Math.floor(totalTime / (1000 * 60));

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return (
    <Box>
      <Container>
        <GroupText>
          <h1>Relógio de ponto</h1>
          <div>
            <h1>
              {`#${userId?.code}`}
              <br />
              <strong>Usuário</strong>
            </h1>
          </div>
        </GroupText>
        <GroupHours>
          <h1>
            {`${hours}h ${minutes}min`} <br />
            <strong>
              {hours === 0 && minutes === 0
                ? "Sem horas hoje"
                : "Horas de hoje"}
            </strong>
          </h1>
        </GroupHours>
        <Button onClick={handleSubmit(onSubmit)} title="Hora de entrada" />
        <Text>Dias anteriores</Text>
        <Content>
          {userPoint &&
            userPoint.map((point) => {
              const dataCriacao = new Date(point.createdAt);
              const dataAtualizacao = new Date(point.updatedAt);
              const diferencaEmMilissegundos =
                dataAtualizacao.getTime() - dataCriacao.getTime();
              const diferencaEmMinutos = Math.floor(
                diferencaEmMilissegundos / 1000 / 60
              );
              const horas = Math.floor(diferencaEmMinutos / 60);
              const minutos = diferencaEmMinutos % 60;
              const diferencaFormatada = `${horas}h ${minutos}min`;
              return (
                <GroupDays key={point.id}>
                  <Day>{moment(point.timestamp).format("DD/MM/YY")}</Day>
                  <Hour>{diferencaFormatada}</Hour>
                </GroupDays>
              );
            })}
        </Content>
      </Container>
    </Box>
  );
}
