'use client'
import React from "react";
import Item from "./item";
import {
  Email,
  Fun,
  QQ,
  Telegram,
  Terminal,
} from "../../assets";
import { distanceToNowHour } from "../../lib/dateRelative";
import config from "../../config";
import ClickCopy from "./clickCopy";
import { HeartOutlined, WechatOutlined } from "@ant-design/icons";
const index = () => {
  return (
    <div className="bg-radial pb-10">
      <div className="px-8 lg:flex lg:justify-around">

        <section className="py-8 lg:w-1/3 font-semibold">
          <div>
            <p>池边新栽七株梅，欲到花时点检来。</p>
            <p>莫怕长洲桃李嫉，今年好为使君开。</p>
          </div>
          <p className="w-full justify-end flex" >
            --《酬刘和州戏赠》
          </p>
        </section>
        
        <section className="lg:w-1/2 flex flex-row justify-between py-8">
          <section>
            <h1 className="font-bold text-sm">交流&探讨</h1>
            <ul>
              <Item link={config.links.littlePlanet}>
                <Fun className="w-4 mr-1" />
                梅心驿站
              </Item>
              <Item link={config.links.jueJin}>
                <Terminal className="w-4 mr-1" /> 
                合作博物馆
              </Item>
              <Item link={config.links.netease}>
                <HeartOutlined className="w-4 mr-1" />
                合作博主
              </Item>
            </ul>
          </section>
          <section>
            <h1 className="font-bold text-sm">联系&关注</h1>
            <ul>
              <ClickCopy link={config.links.email}>
                <Email className="w-4 mr-1" />
                E-mail
              </ClickCopy>
              <Item link={config.links.telegram}>
                <Telegram className="w-4 mr-1" />
                传真
              </Item>
              <Item link={config.links.qq}>
                <QQ className="w-4 mr-1" />
                QQ
              </Item>
              <Item link={config.links.github}>
                <WechatOutlined className="w-4 mr-1" />
                公众号
              </Item>
            </ul>
          </section>
          <section>
            <h1 className="font-bold text-sm">Not Fun Fact</h1>
            <p className="w-30 text-neutral-500 text-sm font-serif">
              梅心文游已运行总计
              <span className="text-red-500 font-bold">
                {distanceToNowHour(config.system.startTime)}
              </span>
              小时
            </p>
          </section>
        </section>
      </div>
    </div>
  );
};

export default index;
