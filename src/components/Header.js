import React from "react";
import ToggleSwitch from "./theme";
import ThemeSelector from "./theme";


export default function Header(){

return(
<>
  <header className="header">
    <div>
       <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHI3bmx6cXYwYzlrNW1wZmd5aW95aGF4bnEybHJpdGx1ZDBjazZhNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o72EXSWcDayDDGP60/giphy.webp" 
       className="webstieIcon" />
    </div>
    <div>
       
            <button>About Me</button>
            <button>My Best Projects</button>
            <button>Contact Me</button>
    </div>
    <div>
    <form>
        <ThemeSelector></ThemeSelector>
    </form>
    </div>
  </header>
</>
)
}