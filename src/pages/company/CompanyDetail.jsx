import { Button, Card, Tag } from "antd";
import { EnvironmentOutlined, HeartOutlined } from "@ant-design/icons";

import React from "react";

const MyCompanyDetail = () => {
  return (
    <div className="w-full p-4">
      <Card>
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src="https://fptsoftware.com/wp-content/uploads/2020/07/logo.png"
              alt="Company Logo"
              className="w-16 h-16"
            />
            <div>
              <h1 className="text-2xl font-bold">FPT Software</h1>
              <Tag color="green">Outsource</Tag>
              <Tag color="blue">Verified</Tag>
            </div>
          </div>
          <Button icon={<HeartOutlined />} type="primary">
            Theo Dõi Công Ty
          </Button>
        </div>
        <div className="mt-4 flex w-full">
          <div className="w-2/3">
            <a href="https://fptsoftware.com" className="text-red-500">
              https://fptsoftware.com/
            </a>
            <h2 className="mt-4 text-xl font-semibold">Mô tả về công ty</h2>
            <p>
              Velstar is a Shopify Plus agency, and we partner with brands to
              help them grow, we also do the same with our people!
            </p>
            <p>
              Here at Velstar, we don't just make websites, we create
              exceptional digital experiences that consumers love. Our team of
              designers, developers, strategists, and creators work together to
              push brands to the next level. From Platform Migration, User
              Experience & User Interface Design, to Digital Marketing, we have
              a proven track record in delivering outstanding eCommerce
              solutions and driving sales for our clients.
            </p>
            <h2 className="mt-4 text-xl font-semibold">Chính sách</h2>
            <ul className="list-disc pl-5">
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
                Great troubleshooting and analytical skills combined with the
                desire to tackle challenges head-on
              </li>
              <li>
                Ambitious and hungry to grow your career in a fast-growing
                agency
              </li>
            </ul>
          </div>
          <div className="w-1/3">
            <h2 className="mt-4 text-xl font-semibold">Địa chỉ công ty</h2>
            <p>
              Đường D1, Khu Công Nghệ Cao, Phường Tân Phú, Quận 9, Thành phố Hồ
              Chí Minh
            </p>
            <div className="mt-4">
              <Button type="default" icon={<EnvironmentOutlined />}>
                Xem trên Maps
              </Button>
            </div>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.6645114079676!2d-86.80218894868738!3d33.51858998061788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88891a4a82e08ab3%3A0x169c98e3dfdb6d67!2sBirmingham%2C%20AL%2C%20USA!5e0!3m2!1sen!2s!4v1572631660196!5m2!1sen!2s"
                width="400"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Company Location"
              ></iframe>
            </div>
            <div className="mt-4">
              <Button type="default">Copy Links</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MyCompanyDetail;
