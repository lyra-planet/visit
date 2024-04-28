import React, { useState } from "react";
import useLogin from "../../../hooks/useLogin";
import { useEffect } from "react";
import { ConfigProvider, Switch } from "antd";
const Form = ({ active }) => {
  const { loading, handleLogin, handleSubmit, setEmail, setPassword } =
    useLogin();
  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col py-5">
      <div className=" mb-5">
        <input
          placeholder="Email"
          className="w-full h-10 p-1 bg-radial text-red-500  border-black border"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
      </div>
      <div className=" mb-5">
        <input
          placeholder="Password"
          className="w-full h-10 p-1 bg-radial text-red-500  border-black border"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          name="password"
        />
      </div>
      <div className="flex flex-row justify-between">
        <input
          placeholder="Verify"
          className="w-1/3 h-10 p-1 bg-radial text-red-500  border-black border"
          name="verify"
        />
        <div className="w-1/3 h-10 p-1 bg-cover   text-red-500  border-black border"
        style={{backgroundImage:"url(https://tse4-mm.cn.bing.net/th/id/OIP-C.P4NIKgDMyX0nUKy28LSiNQHaCy?rs=1&pid=ImgDetMain)"}}
        >
        <img src="https://tse4-mm.cn.bing.net/th/id/OIP-C.P4NIKgDMyX0nUKy28LSiNQHaCy?rs=1&pid=ImgDetMain"  alt="" />
        </div>
      </div>
      <div className="pt-5 flex flex-row justify-between items-center">
        <p className="flex flex-row items-center">
          <ConfigProvider
            theme={{
              token:{
                colorPrimary:'rgb(252, 165, 165)'
              },
              components: {
                Switch: {
                  handleBg:'rgb(239, 68, 68)',
                  handleShadow:'0 0px 0px 0 rgba(0, 35, 11, 0.2)'
                },
              },
            }}
          >
            <Switch className="  bg-neutral-200 border-black mr-2" />
          </ConfigProvider>
          记住密码
        </p>

        <p className="border-b cursor-pointer hover:text-red-500 transition-all">忘记密码<span className="text-red-500 text-xl">?</span></p>
      </div>
      <div>
        <input
          className="flex-start hover:shadow-sm hover:scale-105 transition-all mr-5 cursor-pointer w-20 h-10 font-bold text-xl text-white mt-5 bg-red-500"
          type="submit"
          value="#登录"
        />
        <input
          className="flex-start hover:shadow-sm hover:scale-105 transition-all cursor-pointer w-20 h-10 font-bold text-xl text-black border-2 mt-5 bg-radial "
          type="submit"
          value="#注册"
        />
      </div>
    </form>
  );
};

export default Form;
