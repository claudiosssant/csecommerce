import { Facebook, Instagram } from "react-feather";

const Footer = () => {
  return (
    <div className="h-20 bg-slate-50 px-8 py-4 flex justify-around items-center gap-8">
      <div className="w-1/2">
        ₢ 2023 Copyright <span className="font-bold">CS Store</span>
      </div>
      <div className="flex justify-end gap-8 w-1/2">
        <button><Instagram/></button>
        <button><Facebook/></button>
      </div>
    </div>
   
    
   );
}
 
export default Footer;