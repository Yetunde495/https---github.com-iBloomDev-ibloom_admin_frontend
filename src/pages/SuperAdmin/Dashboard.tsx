import { DashboardCard2 } from "../../components/card/dashboardCards";
import DefaultLayout from "../../layout/DefaultLayout";
import icon1 from "../../assets/svgs/solar_user-hand-up-bold.svg";
import icon2 from "../../assets/svgs/raphael_parent.svg";
import { usersGrowthConfig } from "../../configurations/chartConfig";
import Chart from "react-apexcharts";
import Select from "react-select";
import { useEffect, useState } from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import Table from "../../components/table";
import { TableLoader } from "../../components/Loader";
import { GradesData, courseOverview } from "../../data/mockData";
import DatePicker from "react-datepicker";
import { FcCalendar } from "react-icons/fc";
import { Select3 } from "../../components/form/Select";

export default function SuperAdminDashboard() {
  const [data] = useState<any>();
  const [isLoading] = useState(false);

  const [countryArray, setCountryArray] = useState<any>([]);
  const [country, setCountry] = useState<string>("");
  const [startDate, setStartDate] = useState<any>(new Date());

  const [countryCode, setCountryCode] = useState<number>(0);
  const [stateArray, setStateArray] = useState<any>([]);
  const [state, setState] = useState<string>("");

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      maxHeight: 350,
      minHeight: 45,
      minWidth: 150,
    }),
  };

  useEffect(() => {
    const getState = async () => {
      await import("countries-states-cities").then((data) => {
        const resstate = data.default.getStatesOfCountry(countryCode);
        setStateArray(resstate);
      });
    };
    if (countryCode !== 0) {
      getState();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryCode]);

  useEffect(() => {
    const getAllCountries = async () => {
      await import("countries-states-cities").then((data) => {
        const rescountries = data.default.getAllCountries();
        setCountryArray(rescountries);
      });
    };
    getAllCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <DefaultLayout>
      <section className="py-3 md:px-6 px-1 dark:bg-boxdark">
        <div className="flex lg:flex-row flex-col gap-3 lg:items-center justify-between mb-6">
          <h3 className="font-semibold">Overview</h3>

          <div className="flex gap-4 items-center flex-wrap">
            <div>
              {" "}
              <p className="mb-2 ml-2">Filter by:</p>
            </div>

            <Select
              styles={customStyles}
              isSearchable={true}
              required
              value={{
                value: country,
                label: country || "Select country",
              }}
              onChange={(e: any) => {
                setCountry(e.label);
                setCountryCode(e.value);
              }}
              options={[
                {
                  value: country || "Select...",
                  label: country || "Select...",
                },
                ...countryArray.map((val: any) => ({
                  value: val.id,
                  label: val.name,
                })),
              ]}
            />

            <Select
              styles={customStyles}
              required
              value={{
                value: state,
                label: state || "Select state",
              }}
              onChange={(e: any) => {
                setState(e.label);
              }}
              options={[
                ...stateArray.map((val: any) => ({
                  value: val.id,
                  label: val.name,
                })),
                { value: state, label: state },
              ]}
            />
            <div className="xl:w-[160px] lg:order-first">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="MM/yyyy"
                showMonthYearPicker
                icon={<FcCalendar />}
                showIcon
                showPopperArrow={false}
                showFullMonthYearPicker
                showTwoColumnMonthYearPicker
              />
            </div>
            <div className="">
              <button
                onClick={() => {}}
                className="px-6 py-1.5 font-medium bg-primary text-white border-none rounded-full"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
        <div className="py-9 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 w-full">
          <DashboardCard2
            title="Total Subscribers"
            number={data?.totalClassrooms || "2, 852"}
            icon={
              <div className="p-2 rounded-full bg-[#C3A5EA1A] text-2xl">
                <MdSubscriptions className="text-[#4C117B]" />
              </div>
            }
          />

          <DashboardCard2
            title="Total Parents"
            number={80}
            icon={
              <div className="p-2 rounded-full bg-[#104AC80D] text-2xl">
                <img src={icon2} />
              </div>
            }
          />

          <DashboardCard2
            title="Total Teachers"
            number={57}
            icon={
              <div className="p-2 rounded-full bg-[#1F9AC712] text-2xl">
                <FaChalkboardTeacher className="text-[#1F9AC7]" />
              </div>
            }
          />

          <DashboardCard2
            title="Total Students"
            number={`${data?.totalStudent || 50}`}
            icon={
              <div className="p-2 rounded-full bg-[#01126c]/10 text-2xl">
                <img src={icon1} />
              </div>
            }
          />
        </div>

        <div className="bg-white relative px-3 py-8">
          <Chart
            options={{
              ...usersGrowthConfig,
              stroke: {
                curve: "smooth",
              },
              legend: {
                horizontalAlign: "left",
              },
              title: {
                text: "Number of Users",
                align: "left",
                style: {
                  fontSize: "16px",
                  fontWeight: "600",
                  fontFamily: '"Nunito", sans-serif',
                  color: "#141414",
                },
              },
              grid: {
                show: true,
                borderColor: "#90A4AE36",
                strokeDashArray: 0,
                position: "back",
                xaxis: {
                  lines: {
                    show: false,
                  },
                },
                yaxis: {
                  lines: {
                    show: false,
                  },
                },
              },
            }}
            series={[
              {
                name: "Total Number Of Users on the platform",
                data: [
                  0, 200, 250, 300, 280, 200, 350, 400, 400, 300, 600, 850,
                ],
              },
            ]}
            height={400}
            type="area"
          />
        </div>

        <div className="mt-10">
          {isLoading ? (
            <TableLoader />
          ) : courseOverview?.length > 0 ? (
            <>
              <div className="my-4 flex gap-6 items-center">
                <h3 className="font-semibold">Course Overview</h3>
                <div>
                  <Select3 label="" name="grade">
                    {GradesData.map((val, index) => (
                      <option key={index}>{val}</option>
                    ))}
                  </Select3>
                </div>
              </div>
              <Table show>
                <Table.TableRow>
                  <Table.Row>Subject</Table.Row>
                  <Table.Row>No of Topics</Table.Row>
                  <Table.Row>No of Lessons</Table.Row>
                  <Table.Row>No of Worksheets</Table.Row>
                  <Table.Row>Course Completion</Table.Row>
                </Table.TableRow>

                <Table.TableItems>
                  {courseOverview?.map((item: any, index: number) => (
                    <Table.CellRows
                      useSelectOption={false}
                      onClick={() => {}}
                      key={item?._id + "-" + index}
                    >
                      <Table.Cell>{item?.subject}</Table.Cell>
                      <Table.Cell>{item?.no_of_topic}</Table.Cell>

                      <Table.Cell>{item?.no_of_lessons || "0"}</Table.Cell>
                      <Table.Cell>{item?.no_of_worksheets || "0"}</Table.Cell>
                      <Table.Cell>{`${item?.completion_no + " "} (${
                        item?.completion_percentage
                      })%`}</Table.Cell>
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
                courseOverview === undefined ||
                courseOverview === null ||
                courseOverview?.length === 0
              }
            >
              No Course Overview data found
            </Table.NoData>
          )}
        </div>
      </section>
    </DefaultLayout>
  );
}
