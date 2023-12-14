"use client";
import { useState } from "react";
import Button, { ButtonEvent } from "../../components/button";
import Modal from "../../components/modal";
import Table from "../../components/table";
import DefaultLayout from "../../layout/DefaultLayout";
import { GoDownload } from "react-icons/go";
import PreviewImg from "../../assets/images/Image.png";

const dataArray = [
  {
    tutorName: "Tutor 1",
    course: "Introduction to UX Design",
    date: "Dec 30, 2023",
    status: "69",
  },
  {
    tutorName: "Tutor 2",
    course: "Frontend development Fundamentals",
    date: "Dec 30, 2023",
    status: "100",
  },
  {
    tutorName: "David Wang",
    course: "QA Testing",
    date: "Dec 30, 2023",
    status: "100",
  },
  {
    tutorName: "John Doe",
    course: "Project Management",
    date: "Dec 30, 2023",
    status: "100",
  },
  {
    tutorName: "Angelina Jolie",
    course: "Backend Basics",
    date: "Dec 30, 2023",
    status: "100",
  },
];

const Certificates = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const getStatusVariant = (status: string | number) => {
    if (status === 100) {
      return "success";
    } else if (status === 0) {
      return "error";
    } else {
      return "warning";
    }
  };

  return (
    <DefaultLayout>
      <section className="ml-10">
        <div className="flex justify-between items-center relativ max-w-[1100px]">
          <h1 className="text-xl font-bold dark:text-slate-200">
            Certifications
          </h1>
          <div className="flex rounded-lg items-center border-x border-y gap-3 border-slate-200 p-1">
            <ButtonEvent
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
              variant="filter"
            >
              Filter
            </ButtonEvent>
          </div>
        </div>

        <div className="mt-10">
          <Table show={true}>
            <Table.TableRow>
              <Table.Cell>TUTOR NAME</Table.Cell>
              <Table.Cell>COURSE</Table.Cell>
              <Table.Cell>DATE</Table.Cell>
              <Table.Cell>STATUS</Table.Cell>
              <Table.Cell>ACTION</Table.Cell>
            </Table.TableRow>

            <Table.TableItems>
              {dataArray.map((data, index) => (
                <Table.CellRows useSelectOption={false} key={index}>
                  <Table.Row key={index}>
                    <Table.CellRows useSelectOption={false}>
                      {data.course}
                    </Table.CellRows>
                  </Table.Row>
                  <Table.Row key={index}>
                    <Table.CellRows useSelectOption={false}>
                      {data.tutorName}
                    </Table.CellRows>
                  </Table.Row>
                  <Table.Row key={index}>
                    <Table.CellRows useSelectOption={false}>
                      {data.date}
                    </Table.CellRows>
                  </Table.Row>
                  <Table.Row key={index}>
                    <Table.StatusCell
                      border={false}
                      variant={getStatusVariant(Number(data.status))}
                    >
                      {Number(data.status) === 100
                        ? "Completed"
                        : `${data.status}% in progress`}
                    </Table.StatusCell>
                  </Table.Row>
                  <Table.Row key={index}>
                    <Table.CellRows useSelectOption={false}>
                      <GoDownload
                        onClick={() => {
                          console.log(isModalVisible);
                          setIsModalVisible(true);
                        }}
                      />
                    </Table.CellRows>
                  </Table.Row>
                </Table.CellRows>
              ))}
            </Table.TableItems>
          </Table>
        </div>
        {isModalVisible && (
          <Modal
            onHide={() => setIsModalVisible(false)}
            onProceed={() => setIsModalVisible(false)}
            show={true}
          >
            <div className="w-full flex flex-col justify-center text-center pb-6">
              <img src={PreviewImg} />
              <h3 className="mt-5 mb-3 font-bold text-lg">
                Introduction to UX Design Certificate
              </h3>
              <p>Are you sure you want to download this certificate?</p>
              <Button
                onClick={undefined}
                text="Download"
                variant="secondary"
                size="lg"
                width="full"
                classNames="mt-5"
              />
            </div>
          </Modal>
        )}
      </section>
    </DefaultLayout>
  );
};

export default Certificates;
