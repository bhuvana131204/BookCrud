
import { Sidebar } from "flowbite-react";
import userImg from "../assets/profile.jpg";
import { HiArrowSmRight,HiSupport, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards, HiOutlineCloudUpload } from "react-icons/hi";
import { useContext } from "react";
import { AuthContext } from "../contacts/AuthProvider";


export const SideBar = () => {
  const {user} = useContext(AuthContext);
  console.log(user);
  return (
      <Sidebar aria-label="Sidebar with content separator example" className="bg-blue-100 text-blue-900">
       <Sidebar.Logo href="/" img={user?.photoURL} imgAlt="Flowbite logo" className="w-16 h-16">
        <p>
          {
            user?.displayName || "Home"
          }
        </p>
        
       </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            <p>
                Upload Book
            </p>
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            <p>
                Manage Books
            </p>
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/Users" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="/Shop" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            <p>Sign In</p>
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            <p>Log Out</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiSupport}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    
  )
}

export default SideBar;