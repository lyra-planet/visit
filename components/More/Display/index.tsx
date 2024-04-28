"use client";
import React, { useEffect, useState } from "react";
import * as echarts from "echarts";
import "echarts-gl";
import china from "../../../lib/other/china.json";
import ArrowRight from "../../../assets/icon/arrowRight";
import { TeamOutlined } from "@ant-design/icons";
import Link from "next/link";

const Display = () => {
  const [place, setPlace] = useState({
    city: "甘肃省",
    immovable: 16895,
    movable: 423400,
    visitor: 4.3,
    qingming: 6100000,
    items: [
      { name: "马踏飞燕", link: "/gift/third" },
      { name: "医药简牍", link: "/gift" },
      { name: "彩绘木雕博戏俑", link: "/gift" },
      { name: "高善穆石造像塔", link: "/gift" },
    ],
  });
  useEffect(function () {
    let myChart = echarts.init(document.getElementById("chart-panel"));
    // 指定图表的配置项和数据
    let alirl = [
      [
        [121.15, 31.89],
        [109.781327, 39.608266],
      ],
      [
        [120.38, 37.35],
        [122.207216, 29.985295],
      ],
      [
        [123.97, 47.33],
        [120.13, 33.38],
      ],
      [
        [118.87, 42.28],
        [120.33, 36.07],
      ],
      [
        [121.52, 36.89],
        [117.93, 40.97],
      ],
      [
        [102.188043, 38.520089],
        [122.1, 37.5],
      ],
      [
        [118.58, 24.93],
        [101.718637, 26.582347],
      ],
      [
        [120.53, 36.86],
        [121.48, 31.22],
      ],
      [
        [119.46, 35.42],
        [122.05, 37.2],
      ],
      [
        [119.97, 35.88],
        [116.1, 24.55],
      ],
      [
        [121.05, 32.08],
        [112.02, 22.93],
      ],
      [
        [91.11, 29.97],
        [118.1, 24.46],
      ],
    ];
    let geoCoordMap = {
      台湾省: [121.5135, 25.0308],
      黑龙江省: [127.9688, 45.368],
      内蒙古自治区: [110.3467, 41.4899],
      吉林省: [125.8154, 44.2584],
      北京市: [116.4551, 40.2539],
      辽宁省: [123.1238, 42.1216],
      河北省: [114.4995, 38.1006],
      天津市: [117.4219, 39.4189],
      山西省: [112.3352, 37.9413],
      陕西省: [109.1162, 34.2004],
      甘肃省: [103.5901, 36.3043],
      宁夏回族自治区: [106.3586, 38.1775],
      青海省: [101.4038, 36.8207],
      新疆维吾尔自治区: [87.9236, 43.5883],
      西藏自治区: [91.11, 29.97],
      四川省: [103.9526, 30.7617],
      重庆市: [108.384366, 30.439702],
      山东省: [117.1582, 36.8701],
      河南省: [113.4668, 34.6234],
      江苏省: [118.8062, 31.9208],
      安徽省: [117.29, 32.0581],
      湖北省: [114.3896, 30.6628],
      浙江省: [119.5313, 29.8773],
      福建省: [119.4543, 25.9222],
      江西省: [116.0046, 28.6633],
      湖南省: [113.0823, 28.2568],
      贵州省: [106.6992, 26.7682],
      云南省: [102.9199, 25.4663],
      广东省: [113.12244, 23.009505],
      广西壮族自治区: [108.479, 23.1152],
      海南省: [110.3893, 19.8516],
      上海市: [121.4648, 31.2891],
    };

    let geoCoordMapList = [
      "台湾省",
      "黑龙江省",
      "内蒙古自治区",
      "吉林省",
      "北京市",
      "辽宁省",
      "河北省",
      "天津市",
      "山西省",
      "陕西省",
      "甘肃省",
      "宁夏回族自治区",
      "青海省",
      "新疆维吾尔自治区",
      "西藏自治区",
      "四川省",
      "重庆市",
      "山东省",
      "河南省",
      "江苏省",
      "安徽省",
      "湖北省",
      "浙江省",
      "福建省",
      "江西省",
      "湖南省",
      "贵州省",
      "云南省",
      "广东省",
      "广西壮族自治区",
      "海南省",
      "上海市",
    ];

    let list = [
      {
        city: "甘肃省",
        immovable: 16895,
        movable: 423400,
        visitor: 4.3,
        qingming: 6100000,
        items: [
          { name: "马踏飞燕", link: "/gift/third" },
          { name: "医药简牍", link: "/gift" },
          { name: "彩绘木雕博戏俑", link: "/gift" },
          { name: "高善穆石造像塔", link: "/gift" },
        ],
      },
      {
        city: "陕西省",
        immovable: 49058,
        movable: 7748750,
        visitor: 1.09,
        qingming: 2058100,
        items: [
          { name: "三年兴壶", link: "/gift/second" },
          { name: "鸳鸯莲瓣纹金碗", link: "/gift" },
          { name: "镶金兽首玛瑙杯", link: "/gift" },
          { name: "三彩载乐骆驼俑", link: "/gift" },
        ],
      },
      {
        city: "四川省",
        immovable: 65000,
        movable: 4000000,
        visitor: 60.4,
        qingming: 1078620,
        items: [
          { name: "戴金面罩青铜人头像", link: "/gift/first" },
          { name: "拓唐怀仁集圣教序拓本", link: "/gift" },
          { name: "如意云纹银经瓶", link: "/gift" },
          { name: "释迦背屏式石造像", link: "/gift" },
        ],
      },
      {
        city: "河南省",
        immovable: 65519,
        movable: 1773620,
        visitor: 9.95,
        qingming: 1906900,
        items: [
          { name: '"息"铜鼎', link: "/gift/sixth" },
          { name: "黑花彩陶钵", link: "/gift" },
          { name: "三彩鸳鸯尊", link: "/gift" },
          { name: "贾湖骨笛", link: "/gift" },
        ],
      },
      {
        city: "福建省",
        immovable: 33251,
        movable: 469222,
        visitor: 5.72,
        qingming: 252250,
        items: [
          { name: "云纹青铜大铙", link: "/gift/seventh" },
          { name: "明德化窑白釉荷叶洗", link: "/gift" },
          { name: "宋铁牛", link: "/gift" },
          { name: "寿山石雕舞俑", link: "/gift" },
        ],
      },
      {
        city: "北京市",
        immovable: 3840,
        movable: 5010000,
        visitor: 2.55,
        qingming: 903000,
        items: [
          { name: "清明上河图", link: "/gift/fourth" },
          { name: "翠虁龙纹双耳亭式炉", link: "/gift" },
          { name: "原始青瓷豆", link: "/gift" },
          { name: "鎏金银覆面", link: "/gift" },
        ],
      },
      {
        city: "湖南省",
        immovable: 20366,
        movable: 2000000,
        visitor: 6.6,
        qingming: 1491370,
        items: [
          { name: "四羊青铜方尊", link: "/gift/fifth" },
          { name: "大禾人面纹方鼎", link: "/gift" },
          { name: "兰亭序", link: "/gift" },
          { name: "朱地彩绘棺", link: "/gift" },
        ],
      },
    ];
    const convertCity = function (city) {
      let check = false;
      let index = -1;
      console.log(city);
      for (let i = 0; i < list.length; i++) {
        console.log(list[i].city);
        if (list[i].city == city) {
          check = true;
          index = i;
          break;
        }
      }
      if (check) {
        return list[index];
      } else {
        return list[0];
      }
    };
    const convertData = function () {
      var res = [];
      for (var i = 0; i < geoCoordMapList.length; i++) {
        var geoCoord = geoCoordMap[geoCoordMapList[i]];
        if (geoCoord) {
          res.push({
            name: geoCoordMapList[i],
            value: geoCoord,
          });
        }
      }
      console.log(res);
      return res;
    };
    let option = {
      tooltip: {
        show: true,
      },
      visualMap: [
        {
          type: "continuous",
          seriesIndex: 0,
          text: ["bar3D"],
          calculable: true,
          max: 300,
          inRange: {
            color: ["#87aa66", "#eba438", "#d94d4c"],
          },
        },
        {
          type: "continuous",
          seriesIndex: 1,
          text: ["scatter3D"],
          left: "right",
          max: 100,
          calculable: true,
          inRange: {
            color: ["#000", "blue", "purple"],
          },
        },
      ],
      geo3D: {
        map: "china",
        roam: true,
        itemStyle: {
          areaColor: "red",
          opacity: 1,
          borderWidth: 0.8,
          borderColor: "red",
        },
        label: {
          show: true,
          textStyle: {
            color: "#fff", //地图初始化区域字体颜色
            fontSize: 16,
            opacity: 1,
            backgroundColor: "rgba(0,0,0,0)",
            //backgroundColor: 'rgba(53,171,199,0)'
          },
        },
        emphasis: {
          //当鼠标放上去  地区区域是否显示名称
          itemStyle: {
            color: "red",
            borderWidth: 0.8,
            borderColor: "white",
          },
          label: {
            show: true,
            textStyle: {
              color: "#fff",
              fontSize: 16,
              backgroundColor: "red",
            },
          },
        },
        //shading: 'lambert',
        light: {
          //光照阴影
          main: {
            color: "#fff", //光照颜色
            intensity: 1.2, //光照强度
            //shadowQuality: 'high', //阴影亮度
            shadow: false, //是否显示阴影
            alpha: 55,
            beta: 10,
          },
          ambient: {
            intensity: 0.3,
          },
        },
        realisticMaterial: {
          detailTexture: "asset/leather/leather_albedo.jpg",
        },
      },
      series: [
        {
          type: "lines3D",
          coordinateSystem: "geo3D",
          effect: {
            show: true,
            trailWidth: 4,
            trailOpacity: 0.5,
            trailLength: 0.3,
            constantSpeed: 5,
          },
          blendMode: "lighter",
          lineStyle: {
            width: 0.2,
            opacity: 0.05,
          },
          data: alirl,
        },
        {
          type: "scatter3D",
          name: "scatter3D",
          coordinateSystem: "geo3D",
          symbol: "pin",
          symbolSize: [20, 15],
          itemStyle: {
            color: "red", //点颜色
            borderWidth: 10,
            opacity: 0,
            borderColor: "red",
          },
          data: convertData(),
        },
      ],
    };
    // 使用刚指定的配置项和数据显示图表。
    if (option && typeof option === "object") {
      echarts.registerMap("china", china as any);
      myChart.setOption(option, { notMerge: true });
      myChart.on("click", (clickparams) => {
        let city = convertCity(clickparams.name);
        setPlace(city);
      });
      //@ts-ignore
      window.addEventListener("resize", myChart.resize);
    }
  }, []);
  return (
    <>
      <div className="w-1/3 px-10 flex flex-col">
        <hgroup className="flex items-center relative z-20 bg-white space-x-1 text-2xl">
          <p className=" text-red-500 text-3xl">{place.city}</p>
          <p className="w-1.5 h-1.5 bg-neutral-300"></p>
          <p className="text-neutral-400 font-normal text-xl">
            <span className="font-serif text-red-500 text-3xl">
              {place.items.length}
            </span>
            份数字馆藏
          </p>
          <span className="block flex-grow bg-neutral-100 h-0.5"></span>
        </hgroup>
        <div className="py-5 text-xl">
          {place.items.map((item, index) => {
            return (
              <Link href={item.link}>
                <li className="flex flex-row items-center group/item">
                  <p className="text-nowrap w-content inline-block px-1 border-b py-1 w-full transition-all duration-300 cursor-pointer hover:text-white hover:bg-red-500 group/item ">
                    <span className="group-hover/item:text-white font-lyra text-nowrap text-red-500">
                      #
                    </span>
                    <span className="font-lyra text-nowrap pl-1">
                      {item.name}
                    </span>
                    <ArrowRight className="inline pl-1  w-3  m-0 scale-0 text-white group-hover/item:scale-[300%]  transition-all duration-150" />
                  </p>
                </li>
              </Link>
            );
          })}
        </div>
        <div className="flex-grow flex flex-col justify-center items-center">
          <div className="w-0.5 flex-grow bg-neutral-100"></div>
          <hgroup className="flex flex-col items-center relative z-20 bg-white space-x-1 text-2xl">
            <p className=" text-neutral-400 text-2xl">{place.city}</p>
            <p className=" text-4xl text-red-500">
              <TeamOutlined />
            </p>
            <p className="text-neutral-400 font-normal text-xl">
              文旅人数
              <span className="font-serif text-red-500 text-5xl">
                {place.visitor}
              </span>
              亿<span className="text-sm">(全年)</span>{" "}
            </p>
          </hgroup>
          <div className="w-0.5 flex-grow bg-neutral-100"></div>
        </div>
      </div>
      <div
        id="chart-panel"
        className="w-2/3 overflow-hidden text-red-500 flex-grow border-red-500 border-2 bg-radial"
      ></div>
    </>
  );
};
export default Display;
