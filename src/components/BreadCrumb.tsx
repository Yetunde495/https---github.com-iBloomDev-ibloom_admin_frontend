import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import {FaGreaterThan} from 'react-icons/fa';

interface BreadcrumbProps {
  children?: React.ReactNode;
  routes?: { name: string; path?: string }[];
  pageName?: string;
  homeRoute: string;
  homeRouteName: string;
}

export default function Breadcrumb(props: BreadcrumbProps) {
  const navigate = useNavigate();
  const defaultRoute = props.homeRoute || "/app/dashboard";

  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      {/* <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {props.pageName}
      </h2> */}

      <nav>
        <ol className="flex items-center gap-2 text-black/65 text-lg">
          {props?.routes ? (
            props?.routes?.map((p: any, routeIndex: number) =>
              routeIndex + 1 === props?.routes?.length ? (
                <li className="text-primary">{p?.name}</li>
              ) : (
                <li className="cursor-pointer" onClick={() => navigate(-1)}>
                  {p?.name} /
                </li>
              )
            )
          ) : (
            <Fragment>
              <li>
                <Link to={defaultRoute}>
                  {props.homeRouteName} &nbsp; /
                  {/* <FaGreaterThan className='body' style={{width: '13px', height: '13px', marginTop: '7px'}}/> */}
                </Link>
              </li>
              <li className="text-primary">{props.pageName}</li>
            </Fragment>
          )}
        </ol>
      </nav>
    </div>
  );
}
