
type  userRole = "admin " | "editor";

const canEdit = (role: userRole )=>{
  if(role === "admin " || role === "editor"){
    return true;
  }
  else false;
}

const result = canEdit("admin ")
console.log(result)