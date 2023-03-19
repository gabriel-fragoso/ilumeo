import { axiosInstance as axios } from "../../services/api";
import { setUserId } from "../../store/actions/userSlice";
import { useState, ChangeEvent, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { Box, Title, Input, Main } from "./styles";
import { AxiosResponse, AxiosError } from "axios";
import { Button } from "../../Components/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

type FormValues = {
  code: string;
};

export function Login() {
  const { register, handleSubmit } = useForm<FormValues>();

  const [inputValue, setInputValue] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    axios
      .post("/user", {
        code: data?.code,
      })
      .then((response: AxiosResponse) => {
        const userId = response.data;
        const userCode = response.data.code;

        dispatch(setUserId(userId));
        navigate("/point");
        setInputValue("");
      })
      .catch((err: AxiosError) => {
        toast.error(`Opss, parece que houve um erro :/`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  return (
    <Box>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Main onSubmit={handleSubmit(onSubmit)}>
        <Title>
          Ponto <strong>Ilumeo</strong>
        </Title>
        <Input
          value={inputValue}
          {...register("code")}
          onChange={handleInputChange}
          placeholder="Código do usuário"
        />
        <Button disabled={!inputValue} type="submit" title="Confirmar" />
      </Main>
    </Box>
  );
}
