# usePagination Hook

`usePagination` is a custom hook designed to simplify the use of MUI's pagination component. By specifying the number of items to display per page and the complete dataset as arguments, this hook returns all the necessary elements for implementing pagination. Specifically, it provides the total number of pages, a list of data to display on the current page, a variable containing the current page number, and a handler function for changing pages.

## Installation

npm i usepagination-lib

## Usage

```
import { Pagination } from "@mui/material";
import { usePagination } from "usepagination-lib";

const Array = [
  {
    id: 1,
    name: "一郎",
  },
  {
    id: 2,
    name: "二郎",
  },
  {
    id: 3,
    name: "三郎",
  },
  {
    id: 4,
    name: "四郎",
  },
  {
    id: 5,
    name: "五郎",
  },
  {
    id: 6,
    name: "六郎",
  }
];

export default function Home() {
  const { pageCount, currentPageData, currentPageNumber, handleChangePage } = usePagination(3, Array)
  return (
    <div>
      <div>
        {currentPageData.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
      <Pagination count={pageCount} page={currentPageNumber} onChange={handleChangePage} />
    </div>
  );
}
```
