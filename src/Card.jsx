import { Profile } from "./Component/Profile";
import { Todolist } from "./Component/Todolist";

export const Card = () => {

    return <>
        <div className="card">
            <Profile />
            <Todolist />
        </div>
    </>
}