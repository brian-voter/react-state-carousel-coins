import { render, /*fireEvent*/ } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";


it("card smoke test", function () {
  // this is a low-value test, but better than nothing
  const testImg = TEST_IMAGES[0];
  render(<Card
    src={testImg.src}
    caption={testImg.caption}
    currNum={1}
    totalNum={1}
  />);
});
// end

it("card snapshot", function () {
  // this is a low-value test, but better than nothing
  const testImg = TEST_IMAGES[0];

  const { container } = render(<Card
    src={testImg.src}
    caption={testImg.caption}
    currNum={1}
    totalNum={1}
  />);

  expect(container).toMatchSnapshot();
});
// end