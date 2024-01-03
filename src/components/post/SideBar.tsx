"use client";

import "./SideBar.css";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

const SideBar = ({ items }: { items: any }) => {
  const [activeSection, setActiveSection] = useState("");

  // console.log(items);
  // console.log(typeof items);
  let reversedItems = [...items].reverse();

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      // console.log(position);

      for (let item of reversedItems) {
        const section = item.href.substring(1);
        // console.log(`section :: ${section}`);
        const element = document.getElementById(section);
        // console.log(`element :: ${element}`);

        let activeItemsCount = 0;
        if (element != undefined) {
          // mouse poition greater than element (url) position
          if (position > element.offsetTop) {
            setActiveSection(item.id);
            activeItemsCount += 1;
            break;
          }
        }
        if (activeItemsCount === 0) {
          setActiveSection("");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items, reversedItems]);

  return (
    <nav
      className="sidebar w-[290px] h-[93vh] 
      sticky top-[73px] mt-[5%] p-[1%]"
    >
      <div className="font-bold opacity-60 mb-[6px]">Table of contents</div>
      <ul>
        {items.map((item: any) => (
          <Item key={item.id} item={item} section={activeSection} />
        ))}
      </ul>
    </nav>
  );
};

function Item({ item, section }: { item: any; section: any }) {
  const getItemNumber = (id: any) => parseInt(id.split("_")[1]);

  const getLabel = () => {
    const itemId = getItemNumber(item.id);
    const sectionId = getItemNumber(section);

    if (itemId < sectionId) {
      return "read-section";
    } else if (itemId > sectionId) {
      return "unread-section";
    } else if (itemId === sectionId) {
      return "active-section";
    } else {
      return "";
    }
  };

  return (
    <li key={item.id} className={item.level}>
      <Link href={item.href} className={`hover:text-amber-700 ${getLabel()}`}>
        {item.headingText}
      </Link>
    </li>
  );
}

export default SideBar;
