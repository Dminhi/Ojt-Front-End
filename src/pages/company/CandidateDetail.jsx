import { Button, Card, Tag } from "antd";
import {
  FacebookOutlined,
  FilePdfOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";

import React from "react";

const CandidateDetail = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="bg-white p-8 shadow-md rounded-md max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center mb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/FPT_logo_2010.svg/1200px-FPT_logo_2010.svg.png"
              alt="Company Logo"
              className="w-20 h-20 mr-4"
            />
            <div>
              <h2 className="text-2xl font-bold">Nguyễn Văn A</h2>
              <div className="flex gap-2 mt-2">
                <Tag color="green">Front-end</Tag>
                <Tag color="blue">Fresher</Tag>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Mô tả về bản thân</h3>
            <p className="mb-4 text-gray-600">
              Velstar is a Shopify Plus agency, and we partner with brands to
              help them grow, we also do the same with our people! Here at
              Velstar, we don’t just make websites, we create exceptional
              digital experiences that consumers love. Our team of designers,
              developers, strategists, and creators work together to push brands
              to the next level. From Platform Migration, User Experience & User
              Interface Design, to Digital Marketing, we have a proven track
              record in delivering outstanding eCommerce solutions and driving
              sales for our clients.
            </p>
            <h3 className="text-xl font-semibold mb-2">Kinh nghiệm làm việc</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>
                Great troubleshooting and analytical skills combined with the
                desire to tackle challenges head-on
              </li>
              <li>
                3+ years of experience in back-end development working either
                with multiple smaller projects simultaneously or large-scale
                applications
              </li>
              <li>
                Experience with HTML, JavaScript, CSS, PHP, Symphony and/or
                Laravel
              </li>
              <li>
                Working regularly with APIs and Web Services (REST, GraphQL,
                SOAP, etc)
              </li>
              <li>
                Have experience/awareness in Agile application development,
                commercial off-the-shelf software, middleware, servers and
                storage, and database management.
              </li>
              <li>
                Familiarity with version control and project management systems
                (e.g., Github, Jira)
              </li>
              <li>
                Ambitious and hungry to grow your career in a fast-growing
                agency
              </li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">
              Định hướng phát triển
            </h3>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>
                Great troubleshooting and analytical skills combined with the
                desire to tackle challenges head-on
              </li>
              <li>
                3+ years of experience in back-end development working either
                with multiple smaller projects simultaneously or large-scale
                applications
              </li>
              <li>
                Experience with HTML, JavaScript, CSS, PHP, Symphony and/or
                Laravel
              </li>
              <li>
                Working regularly with APIs and Web Services (REST, GraphQL,
                SOAP, etc)
              </li>
              <li>
                Have experience/awareness in Agile application development,
                commercial off-the-shelf software, middleware, servers and
                storage, and database management.
              </li>
              <li>
                Familiarity with version control and project management systems
                (e.g., Github, Jira)
              </li>
              <li>
                Ambitious and hungry to grow your career in a fast-growing
                agency
              </li>
            </ul>
          </div>
        </div>
        <div className="md:col-span-1">
          <Card className="mb-4">
            <Button type="primary" className="w-full mb-4 bg-red-700">
              Đặt Lịch Phỏng Vấn
            </Button>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Địa chỉ cá nhân</h3>
              <p>
                Đường D1, Khu Công Nghệ Cao, Phường Tân Phú, Quận 9, Thành phố
                Hồ Chí Minh
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Kỹ năng</h3>
              <p>Technical:</p>
              <Tag color="cyan">REACTJS</Tag>
              <Tag color="cyan">NODEJS</Tag>
              <p className="mt-2">Language:</p>
              <Tag color="red">JAPANESE N2</Tag>
              <Tag color="red">TOEIC 700</Tag>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Thông tin cá nhân</h3>
              <div className="flex space-x-2">
                <Button icon={<MailOutlined />} shape="circle" />
                <Button icon={<LinkedinOutlined />} shape="circle" />
                <Button icon={<FacebookOutlined />} shape="circle" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Truy cập CV của A để xem thêm
              </h3>
              <Button
                type="default"
                icon={<FilePdfOutlined />}
                className="w-full mt-2"
              >
                Truy Cập CV
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetail;
