import { Navbar } from "@/components/layout/Navbar";


const commonLayout = ({children}: {children: React.ReactNode}) => {


    return (
        <div>
            <Navbar></Navbar>

         <h1>this is common layout</h1>

          <div>
            {children}
          </div>
            
        </div>
    );
};

export default commonLayout;