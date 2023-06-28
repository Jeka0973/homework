import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cards from './Cards'
import SelectedGoodCard from './SelectedGoodCard'
import Basket from './Basket'
import AutorizeForm from './AutorizeForm'

function ContentBody() {
  return (
    <div className="contentBody">
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<AutorizeForm />} />
        <Route
          path="/category/:id"
          element={
            <>
              <Cards />
              {/* <ContentHeader /> */}
            </>
          }
        />
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  )
}

export default ContentBody
{
  /* <SelectedGoodCard /> */
}

{
  /* <Basket /> */
}
{
  /* <AutorizeForm /> */
}
