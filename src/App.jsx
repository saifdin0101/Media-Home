import { IoSearchCircleSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { IoStorefrontSharp } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";






function App() {
  return (
    <div className=" bg-[#f9edfa] ">
      <nav className="flex bg-white justify-center h-[100px] items-center gap-[300px]">
        <h1 className="text-3xl">Fri<span className="text-[#e040fb]">Dat</span></h1>
        <div><input placeholder="             Search For Friends" className="h-[48px] w-[600px] bg-gray-300 rounded-[30px]" type="search" /><div className="text-5xl absolute top-[25.5px] bg-[#e040fb] rounded-l-[30px] text-white"><IoSearchCircleSharp /></div></div>
        <div className="h-[50px] w-[50px] bg-green-600 rounded-full">
          <div></div>
          <div className="h-[20px] w-[20px] flex justify-center items-center mt-[30px] ml-[30px] rounded-full bg-white"><IoIosArrowDown /> </div>

        </div>

      </nav>
      <div className="flex  p-[50px] gap-10">
        <div className=" h-[80vh] -[40%] flex flex-col justify-start pt-[37px] items-center gap-[20px]">
          <div className="h-[90px] flex hover:bg-[#ea80fc] items-center  w-[250px] rounded-[20px] bg-[white]">
            <div className="h-[50px] ml-2 w-[50px] bg-green-600 rounded-full"></div>
            <div className="pl-5">
              <div>User Name</div>
              <div className="text-sm text-[#e4e2ea]">@UserName</div>
            </div>
          </div>
          <div className="h-[350px]  w-[250px] rounded-[20px] flex flex-col justify-center items-center bg-white">
            <div className="h-[25%] rounded-t-[20px] w-full bg-white flex justify-center gap-16 hover:bg-[#f9edfa] hover:text-[#e040fb] items-center">
              <div className="text-2xl text-[#a5a0b9]"><FaHome /></div>
              <div className="font-medium">Home</div>

            </div>
            <div className="h-[25%]  w-full bg-white flex justify-center gap-16 hover:bg-[#f9edfa] hover:text-[#e040fb] items-center">
              <div className="text-2xl text-[#a5a0b9]"><IoStorefrontSharp /></div>
              <div className="font-medium">Store</div>

            </div>
            <div className="h-[25%]  w-full bg-white flex justify-center gap-16  hover:bg-[#f9edfa] hover:text-[#e040fb] items-center">
              <div className="text-2xl text-[#a5a0b9] "><MdGroups /></div>
              <div className="font-medium">Groups</div>

            </div>
            <div className="h-[25%] rounded-b-[20px] w-full bg-white flex justify-center gap-16 hover:bg-[#f9edfa] hover:text-[#e040fb] items-center">
              <div className="text-2xl text-[#a5a0b9]"><IoIosSettings /></div>
              <div className="font-medium">Settings</div>

            </div>
          </div>
          <div className="h-[60px] w-[250px]  rounded-[30px] flex justify-center items-center bg-[#e040fb] hover:bg-[#ea80fc]">Creat Post</div>
        </div>
        <div className=" h-[100vh]   w-[60%] flex justify-center flex-col gap-5">
          <div className="h-[240px]  rounded-[30px] flex gap-5">
            <div className="h-[100%] w-[130px]  rounded-[30px] bg-red-200 flex justify-center pt-3">
              <div className="h-[50px] border border-[#e040fb]   w-[50px] bg-green-600 rounded-full "></div>
            </div>
            <div className="h-[100%] w-[130px]  rounded-[30px] bg-red-200 flex justify-center pt-3">
              <div className="h-[50px] border border-[#e040fb]   w-[50px] bg-green-600 rounded-full "></div>
            </div>
            <div className="h-[100%] w-[130px]  rounded-[30px] bg-red-200 flex justify-center pt-3">
              <div className="h-[50px] border border-[#e040fb]   w-[50px] bg-green-600 rounded-full "></div>
            </div>
            <div>
              <div className="h-[100%] w-[130px]  rounded-[30px] bg-white flex justify-center items-center hover:bg-[#ea80fc]">
                <div className="    hover:bg-[#e040fb] bg-[#e7e5e5] rounded-full flex justify-center hover:scale-125 hover:duration-300  items-center text-gray-300 text-6xl "><CiCirclePlus /></div>
              </div>
            </div>

          </div>
          {/* when you typing the post */}
          <div className="h-[70px] bg-white rounded-[30px] flex justify-center items-center gap-[40px]">
            <div className="h-[50px] ml-2 w-[50px] bg-green-600 rounded-full"></div>
            <div><input className="h-[50px] bg-gray-200 w-[490px] rounded-[30px]" placeholder="     AnyThing In Your Mind ..." type="text" /></div>
            <div className="bg-[#e040fb] hover:bg-[#ea80fc] h-[50px] w-[100px] flex justify-center items-center rounded-[30px]">Post</div>
          </div>
          {/* post */}

          <div className="">
            {/* here you can push your post */}
            <div></div>
            {/* first post */}
            <div className="w-[100%] h-[500px] bg-white rounded-[30px] flex justify-center items-center flex-col gap-5">
              <div className=" h-[80px] gap-[350px] w-full flex justify-center items-center ">
                <div className="flex gap-5">
                  <div className="h-[50px] ml-2 w-[50px] bg-green-600 rounded-full"></div>
                  <div className="">
                    <div className="font-medium">User Name</div>
                    <div>Post Time</div>

                  </div>
                </div>
                <div className="text-2xl"><HiOutlineDotsHorizontal /></div>
              </div>
              <div className="w-[70%] rounded-[30px] h-[250px] bg-red-300"></div>
              <div className=" h-[50px] w-[67%] flex gap-3">
                <div className="text-2xl text-[#a5a0b9] flex"><FaRegHeart /><div className="text-xl "></div></div>
                <div className="text-2xl text-[#a5a0b9]"><FaRegComment /></div>

              </div>
            </div>
          </div>
        </div>
        <div className=" h-[100vh]  w-[40%] flex flex-col gap-5">
          {/* Users */}
          <div className="h-[45%] w-full bg-white rounded-[30px]"></div>
          <div className="text-xl pl-2 font-bold "> Recomanded content creators :</div>
          <div className="h-[50%] w-full bg-white rounded-[30px]"></div>

        </div>



      </div>














    </div>
  );
}

export default App;
