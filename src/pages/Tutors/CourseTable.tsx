import { useState } from "react";
import Table from "../../components/table";
import PreviewImg from "../../assets/images/Image.png";
import { MdMoreVert } from "react-icons/md";

const dataArray = [
  {
    courseImg: PreviewImg,
    courseName: "Introduction to UX Design",
    dateCreated: "12/12/23",
    price: "$69.00",
  },
  {
    courseImg: PreviewImg,
    courseName: "Introduction to UX Design",
    dateCreated: "12/12/23",
    price: "$69.00",
  },
  {
    courseImg: PreviewImg,
    courseName: "Introduction to UX Design",
    dateCreated: "12/12/23",
    price: "$69.00",
  },
  {
    courseImg: PreviewImg,
    courseName: "Introduction to UX Design",
    dateCreated: "12/12/23",
    price: "$69.00",
  },
  {
    courseImg: PreviewImg,
    courseName: "Introduction to UX Design",
    dateCreated: "12/12/23",
    price: "$69.00",
  },
];

const CourseTable = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <section className="ml-10">
      <div className="mt-10">
        <Table show={true}>
          <Table.TableRow>
            <Table.Cell>COURSE DETAILS</Table.Cell>
            <Table.Cell>DATE CREATED</Table.Cell>
            <Table.Cell>PRICE</Table.Cell>
            <Table.Cell>ACTION</Table.Cell>
          </Table.TableRow>

          <Table.TableItems>
            {dataArray.map((data, index) => (
              <Table.CellRows useSelectOption={false} key={index}>
                <Table.Row key={index}>
                  <Table.CellRows useSelectOption={false}>
                    <div className="flex gap-x-16 items-center">
                      <img
                        src={data.courseImg}
                        width={170}
                        className="rounded-lg h-30"
                      />
                      {data.courseName}
                    </div>
                  </Table.CellRows>
                </Table.Row>
                <Table.Row key={index}>
                  <Table.CellRows useSelectOption={false}>
                    {data.dateCreated}
                  </Table.CellRows>
                </Table.Row>
                <Table.Row key={index}>
                  <Table.CellRows useSelectOption={false}>
                    {data.price}
                  </Table.CellRows>
                </Table.Row>
                <Table.Row key={index}>
                  <Table.CellRows useSelectOption={false}>
                    <MdMoreVert />
                  </Table.CellRows>
                </Table.Row>
              </Table.CellRows>
            ))}
          </Table.TableItems>
        </Table>
      </div>
    </section>
  );
};

export default CourseTable;
