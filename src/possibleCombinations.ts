// create type that creates all possible combination of given routes
// ex.
type MainRoutes="users"|"licenses"|"roles"
 
type SubRoutes="id"|"detail"
 
 
// type AllRoutes= Record<MainRoutes,SubRoutes>  
type AllRoutes = `${MainRoutes}/${SubRoutes}`
//      "users/id" | "users/detail" | "licenses/id" | "licenses/detail" | "roles/id" | "roles/detail"


