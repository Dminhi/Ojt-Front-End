import { Facebook, YouTube } from "@mui/icons-material";
import { Layout, Typography } from "antd";

import React from "react";

const { Footer } = Layout;
const { Title, Text } = Typography;

const CustomFooter = () => {
  return (
    <>
      <Footer className="bg-red-700 text-white py-8 w-full">
        <div className="w-full text-white">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <img
                src="/FooterLogo.png"
                alt="RikkeiEdu"
                className="h-16 mb-2"
              />
              <Text className="!text-white text-left flex justify-start mb-2 mt-8">
                Tầng 7 tháp A toà Sông Đà, đường Phạm Hùng, quận Nam Từ Liêm, Hà
                Nội
              </Text>
              <Text className="!text-white flex justify-start mb-2">
                0862 069 233
              </Text>
              <Text className="!text-white flex justify-start mb-2">
                academy@rikkeisoft.com
              </Text>
              <div className="flex mt-2">
                <a href="#" className="mr-2 !text-white">
                  <Facebook />
                </a>
                <a href="#" className="!text-white">
                  <YouTube />
                </a>
              </div>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <Title
                  level={4}
                  className="!text-white flex justify-start font-bold mb-4"
                >
                  Khóa học
                </Title>
                <ul className="mt-8">
                  <li>
                    <a href="#" className="!text-white flex justify-start mb-2">
                      Làm quen với Code
                    </a>
                  </li>
                  <li>
                    <a href="#" className="!text-white flex justify-start mb-2">
                      Bootcamp Fulltime
                    </a>
                  </li>
                  <li>
                    <a href="#" className="!text-white flex justify-start mb-2">
                      Bootcamp Parttime
                    </a>
                  </li>
                  <li>
                    <a href="#" className="!text-white flex justify-start mb-2">
                      Kỹ sư CNTT - PTIT
                    </a>
                  </li>
                  <li>
                    <a href="#" className="!text-white flex justify-start mb-2">
                      Bộ trợ cho nghề
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <Title
                  level={4}
                  className="!text-white flex justify-start font-bold mb-4"
                >
                  Tài nguyên học tập
                </Title>
                <ul className="mt-8">
                  <li>
                    <a href="#" className="!text-white flex justify-start mb-2">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="!text-white flex justify-start mb-2">
                      Ebook - Report
                    </a>
                  </li>
                  <li>
                    <a href="#" className="!text-white flex justify-start mb-2">
                      Khóa học miễn phí
                    </a>
                  </li>
                  <li>
                    <a href="#" className="!text-white flex justify-start mb-2">
                      Sự kiện - Webinar
                    </a>
                  </li>
                  <li>
                    <a href="#" className="!text-white flex justify-start mb-2">
                      Cộng đồng
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <Title
                  level={4}
                  className="!text-white text-left flex justify-start font-bold mb-8"
                >
                  Vì sao chọn Rikkei Academy
                </Title>
                <ul className="mt-8">
                  <li>
                    <a href="#" className="!text-white flex justify-start mb-2">
                      Về Rikkei Academy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="!text-white flex justify-start mb-2">
                      Hệ sinh thái Rikkei
                    </a>
                  </li>
                  <li>
                    <a href="#" className="!text-white flex justify-start mb-2">
                      Cơ hội nghề nghiệp
                    </a>
                  </li>
                  <li>
                    <a href="#" className="!text-white flex justify-start mb-2">
                      Tấm gương sáng
                    </a>
                  </li>
                  <li>
                    <a href="#" className="!text-white flex justify-start">
                      Liên hệ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Text className="!text-white">
              Copyright 2023 © Rikkei Education. All Rights Reserved.
            </Text>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default CustomFooter;
