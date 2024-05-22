import { DashboardCard2 } from "../../components/card/dashboardCards";
import DefaultLayout from "../../layout/DefaultLayout";
import { useState } from "react";
import { MdCancel, MdPending, MdSubscriptions } from "react-icons/md";
import Table from "../../components/table";
import { TableLoader } from "../../components/Loader";
import { WorksheetsData} from "../../data/mockData";
import formatDateToString from "../../utils/convertDateStampToString";
import { BsFillPatchCheckFill } from "react-icons/bs";

export default function ValidatorDashboard() {
  const [data] = useState<any>();
  const [isLoading] = useState(false);

  return (
    <DefaultLayout>
      <section className=" md:px-3 px-1 dark:bg-boxdark">
        <div className="py-9 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 w-full">
          <DashboardCard2
            title="Total Worksheets"
            number={data?.totalClassrooms || "200"}
            icon={
              <div className="p-2 rounded-full bg-[#C3A5EA1A] text-xl">
                <MdSubscriptions className="text-[#4C117B]" />
              </div>
            }
          />

          <DashboardCard2
            title="Approved Worksheets"
            number={60}
            icon={
              <div className="p-2 rounded-full bg-[#4CAF500D] text-xl">
               <BsFillPatchCheckFill className="text-[#1B9620]" />
              </div>
            }
          />

          <DashboardCard2
            title="Pending Worksheets"
            number={57}
            icon={
              <div className="p-2 rounded-full bg-[#BD6A080D] text-xl">
                <MdPending className="text-[#DB7B07]" />
              </div>
            }
          />

          <DashboardCard2
            title="Rejected Worksheets"
            number={`${data?.totalStudent || 50}`}
            icon={
              <div className="p-2 rounded-full bg-[#ED23230D]/10 text-xl">
                <MdCancel className="text-[#AE0317]"  />
              </div>
            }
          />
        </div>

        <div className="mt-10">
          {isLoading ? (
            <TableLoader />
          ) : WorksheetsData?.length > 0 ? (
            <>
              <div className="my-4 flex gap-6 items-center justify-between">
                <h3 className="font-semibold">Recent Worksheets</h3>
                <div>
                  <button className="bg-transparent border border-primary py-2 px-4 text-primary rounded-md hover:text-white hover:bg-primary">
                    View More
                  </button>
                </div>
              </div>
              <Table show>
                <Table.TableRow>
                  <Table.Row>Subject</Table.Row>
                  <Table.Row>Topic</Table.Row>
                  <Table.Row>Date Generated</Table.Row>
                  <Table.Row>Worksheet Level</Table.Row>
                  <Table.Row>Status</Table.Row>
                </Table.TableRow>

                <Table.TableItems>
                  {WorksheetsData.slice(0, 8)?.map((item: any, index: number) => (
                    <Table.CellRows
                      useSelectOption={false}
                      onClick={() => {}}
                      key={item?._id + "-" + index}
                    >
                      <Table.Cell>{item?.subject}</Table.Cell>
                      <Table.Cell>{item?.topic}</Table.Cell>

                      <Table.Cell> {formatDateToString(item?.date_generated)}</Table.Cell>
                      <Table.Cell>{item?.level}</Table.Cell>
                      <Table.StatusCell
                          variant={
                            item?.status === "Approved"
                              ? "success"
                              : item?.status === "Rejected" ? "error"
                              : "warning"
                          }
                        >
                          {item?.status}
                        </Table.StatusCell>
                    </Table.CellRows>
                  ))}
                </Table.TableItems>
              </Table>
            </>
          ) : (
            <Table.NoData
              onAdd={() => {}}
              hideButton={true}
              show={
                WorksheetsData === undefined ||
                WorksheetsData === null ||
                WorksheetsData?.length === 0
              }
            >
              No Recent Worksheet found
            </Table.NoData>
          )}
        </div>
      </section>
    </DefaultLayout>
  );
}
