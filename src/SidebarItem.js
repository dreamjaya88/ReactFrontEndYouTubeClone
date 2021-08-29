import React from 'react';
import './SidebarItem.css';

function SidebarItem({ selected, Icon, title }) {
    return (
        <div className={`sidebarItem ${selected && "selected"}`}>
            <Icon className="sidebarItem__Icon" />
            <h2 className="sidebarItem__title">{title}</h2>
        </div>
    )
}

export default SidebarItem
