import dashboard from '../assets/element-4.png'
import deals from '../assets/briefcase.png'
import calender from '../assets/Vector.png'
import setting from '../assets/setting.png'
import members from '../assets/member.png'
import notfication from '../assets/notfication.png'
import tasks from '../assets/tasks.png'

import { NavLink } from 'react-router-dom';
export default function Sidebar() {

  const sidebarItems = [
    {
      link: '/',
      icon: dashboard,
    },
    {
      link: '/deals',
      icon: deals,
    },
    {
      link: '/customer',
      icon: members,
    },
    {
      link: '/tasks',
      icon: tasks,
    },
    {
      link: '/calender',
      icon: calender,
    },
    {
      link: '/notfication',
      icon: notfication,
    },
    {
      link: '/setting',
      icon: setting,
    },
  ]

  return (
    <div className="min-w-[90px] h-[calc(100vh-90px)] border-r border-[#EAEEF4] bg-[#F6FAFDE5]"> 
        <ul className='flex flex-col items-center gap-4 pt-4'>
            {sidebarItems.map((item, index) => (
                <NavLink to={item.link} key={index}>
                  <li className='bg-[#EAEEF4] flex justify-center items-center w-[50px] h-[50px] rounded-full cursor-pointer'>
                      <img src={item.icon} alt={'icon'} title={item.link} className='text-[#7E92A2]'/>
                  </li>
                </NavLink>
            ))}
        </ul>
    </div>
  );
}
