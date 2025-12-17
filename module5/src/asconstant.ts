// as const assersion
// fixed string value k literal type bola hoy



const userRoles = {
    Admin: "ADMIN",
    Editor: "EDITOR",
} as const;

// user['Admin'] "Admin"
/*
typeof UserRoles = {
    Admin: 'Admin',
    Editor: "Editor",
}
*/

/* 



keyof typeof userRoles
'ADMIN' || 'EDITOR'
UserRoles['Admin'] >> ADMIN


*/
// এটা মানে: userRoles অবজেক্ট থেকে "Admin" এবং "Editor" কি-গুলোর ভ্যালু
// userRoles["Admin"] → "ADMIN"
// userRoles["Editor"] → "EDITOR"
// Union করলে: "ADMIN" | "EDITOR"

const canEdit = (role: typeof userRoles [keyof typeof userRoles])=>{

    if(userRoles.Admin === role || role === userRoles.Editor){
        return true;
    }
    else return false;

}
const ok = canEdit(userRoles.Admin)

console.log(ok)


