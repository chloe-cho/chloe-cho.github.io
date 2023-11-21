import React from 'react'
import { FaGithub } from "react-icons/fa";


const ProjectItem: React.FC<{title: string, github: string, details: string }> = (props) => {
    return (
        <div>
            <ol>
                <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase text-slate-500 sm:col-span-2">{props.title}</header>
                        <div className="z-10 sm:col-span-6">
                        <p className="text-sm leading-normal">{props.details}</p>
                            <h3 className="font-medium leading-snug text-slate-200">
                                { props.github ?
                                <div>
                                    <a className="inline-flex items-baseline font-medium text-slate-200 hover:text-[#38b6ff] group/link text-base" href={props.github} target="_blank" rel="noreferrer">
                                        <span><FaGithub className='inline-block'/></span>
                                    </a>
                                </div> : null
                                }
                            </h3>
                         
                        </div>
                    </div>
                </li>
            </ol>
        </div>
    );
}

export default ProjectItem
