const Title = props => {
  console.log('dsdsdsadhbj')
  const prop = props.props
  console.log(prop.principals)
  if (
    prop.title === '' ||
    prop.title === undefined ||
    prop.image === undefined ||
    prop.titleType === 'video' ||
    prop.titleType === 'short' ||
    prop.titleType === 'tvSpecial' ||
    prop.titleType === 'tvMiniSeries' ||
    prop.titleType === 'videoGame' ||
    prop.titleType === 'tvEpisode' ||
    prop.titleType === 'podcastEpisode' ||
    prop.titleType === undefined ||
    prop.principals === undefined
  ) {
    return
  }
  return (
    <div className='card border border-primary mx-1 col-3  my-2'>
      <div
        className='bg-image hover-overlay ripple'
        data-mdb-ripple-color='light'
      >
        <img alt='prop.title' src={prop.image.url} className='img-fluid ' />
      </div>

      <div className='card-body text-start px-0'>
        <h5 className='card-title h5 fw-bolder px-3'>
          {prop.title} ({prop.year})
        </h5>
        <div className='card-text px-4 text-uppercase'>
          <p className='py-0 my-0'>
            <span className=' fw-bolder'>Content Type - </span>
            {prop.titleType}
          </p>
          {prop.numberOfEpisodes && (
            <p className='py-0 my-0'>
              <span className=' fw-bolder'>Episodes - </span>
              {prop.numberOfEpisodes}
            </p>
          )}
          {prop.runningTimeInMinutes && (
            <p className='py-0 my-0'>
              <span className=' fw-bolder'>Running Time - </span>
              {prop.runningTimeInMinutes} Minutes
            </p>
          )}

          {prop.principals !== undefined && (
            <div>
              <div className='d-inline-flex gap-1 my-2'>
                <a
                  class='btn btn-outline-primary btn-sm my-0'
                  data-bs-toggle='collapse'
                  href={`#${prop.id}`}
                  role='button'
                  aria-expanded='false'
                  aria-controls={prop.id}
                >
                  Lead Cast <i class='bi bi-caret-down-fill'></i>{' '}
                </a>
              </div>
              <div class='collapse my-0' id={prop.id}>
                <div class=' card-body small my-0 py-0 fw-semibold'>
                  {prop.principals.length > 0 &&
                    prop.principals.map(res => (
                      <>
                        {' '}
                        <span>{res.name} </span> <br />
                      </>
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default Title
