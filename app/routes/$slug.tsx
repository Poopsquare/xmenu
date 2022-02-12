import {LoaderFunction, useLoaderData} from "remix";
import {BANDECO} from "../../sample-menu-data/bandeco";

const mockLoadingMenu = new Promise(function(resolve) {
    setTimeout(resolve, 2000, BANDECO);
})

export const loader: LoaderFunction = async ({params}) => {
    console.log('slug', params.slug)
    return await mockLoadingMenu;
}

export default function Menu() {
    const menu = useLoaderData();
    console.log('menu', menu)
    return (
        <div>teste</div>
    );
}
