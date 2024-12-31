import React,{useState} from "react"

function Header(){
    return(<>
    <div className="header-part">
        <nav className="navbar navbar-expand-lg bg-success ">
            <h4 className="text-light">Vegetable Mart🥗</h4>
            <ul className="navbar-nav ">
                <li className="nav-item  px-2"> <a className=" text-light nav-link" href="">Home</a></li>
                <li className="nav-item  px-2"> <a className="text-light nav-link" href="">Product</a></li>
                <li className="nav-item px-2"> <a className=" text-light nav-link" href="">Cart</a></li>
                <li className="nav-item "> <a className=" text-light nav-link" href="">Contect Us</a></li>
            </ul>
        </nav>
    </div>

   

    </>);
};
export default Header;