/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Textbox from "../components/Textbox";
import Button from "../components/Button";
import { useSelector } from "react-redux";

const Login = () => {
  const { user } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const submitHandler = async (data) => {
    console.log("submit");
  };

  useEffect(() => {
    user && navigate("/dashboard");
  }, [user]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6] ">
      <div className="w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center">
        {/* left side */}
        <div className="w-full h-full lg:w-2/3 flex flex-col items-center justify-center">
          <div className="w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20">
            <span className="flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base border-gray-300 text-gray-600">
              Quản lý tất cả công việc của bạn ở một nơi !
            </span>
            <p className="flex flex-col gap-0 md:gap-4 text-4xl md:text-6xl 2xl:text-7xl font-black text-center text-blue-700">
              <span>Cloud-Based</span>
              <span>Quản lý công việc</span>
            </p>

            <div className="cell">
              <div className="circle rotate-in-up-left"></div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14 "
          >
            <div className="">
              <p className="text-blue-600 text-3xl font-bold text-center">
                Chào mừng trở lại!
              </p>
              <p className="text-center text-base text-gray-700">
                Giữ tất cả thông tin xác thực của bạn an toàn.
              </p>
            </div>

            <div className="flex flex-col gap-y-5">
              <Textbox
                placeholder="email@example.com"
                type="email"
                name="email"
                label="Địa chỉ Email"
                className="w-full rounded-full"
                register={register("email", {
                  required: "Email là bắt buộc!",
                })}
                error={errors.email ? errors.email.message : ""}
              />
              <Textbox
                placeholder="mật khẩu..."
                type="password"
                name="password"
                label="Mật khẩu"
                className="w-full rounded-full"
                register={register("password", {
                  required: "Mật khẩu là bắt buộc!",
                })}
                error={errors.password ? errors.password.message : ""}
              />

              <span className="text-sm text-gray-500 hover:text-blue-600 hover:underline cursor-pointer">
                Quên mật khẩu?
              </span>

              <Button
                type="submit"
                label="Đăng nhập"
                className="w-full h-10 bg-blue-700 text-white rounded-full"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
