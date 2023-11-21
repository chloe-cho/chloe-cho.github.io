import React from 'react'
import { BsLink45Deg } from "react-icons/bs";

const WorkItem: React.FC<{ date: string, title: string, company: string, companyURL: string, details: Array<string> }> = (props) => {
    return (
        <div>
            <ol>
                <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase text-slate-500 sm:col-span-2">{props.date}</header>
                        <div className="z-10 sm:col-span-6">
                            <h3 className="font-medium leading-snug text-slate-200">
                                <div>
                                    <a className="inline-flex items-baseline font-medium text-[#38b6ff] hover:text-slate-200 group/link text-base" href={props.companyURL} target="_blank" rel="noreferrer">
                                        <span>{props.title} @ <span className="inline-block">{props.company}</span> <BsLink45Deg className='inline-block' />
                                        </span>
                                    </a>
                                </div>
                            </h3>
                            {/* <p className="mt-2 text-sm leading-normal">{props.details}</p> */}
                            <ul className='list-disc px-6 text-sm text'>  {
                                props.details.map((idx) =>
                                    <li>{idx}</li>
                                )}
                            </ul>

                        </div>
                    </div>
                </li>
            </ol>
        </div>
    );
}

export default WorkItem
