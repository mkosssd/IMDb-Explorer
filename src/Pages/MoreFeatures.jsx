import { NavLink} from "react-router-dom"

const MoreFeatures = () => {
    const pages = [
        {
            pageLink: '/',
            pageName: 'Home'
        },
        {
            pageLink: '/popular-tv-shows',
            pageName: 'Popular TV Shows'
        },
        {
            pageLink: '/popular-movies',
            pageName: 'Popular Movies'
        },

    ]
    return <>
        <h4 className="h3 fw-bold">
            More Results

        </h4>
        <div>
            {pages.map(res =>
                <NavLink className={"btn btn-outline-primary btn-sm rounded-pill rounded mx-2 my-4 px-3 py-1"} to={res.pageLink}>{res.pageName}</NavLink>
            )}
        </div>
    </>
}
export default MoreFeatures