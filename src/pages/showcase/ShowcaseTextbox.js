import React from "react";
import "./Showcase.scss";
import { H3 } from "../../ui/Typography";
import { Textbox, TextboxIconLeft, TextboxIconRight } from "../../ui";

function ShowcaseTextbox() {
  return (
    <>
      <div className="showcase-wrapper">
        <H3>(Textbox 1) Outline Textbox , 2px Outline</H3>
        <div className="showcase-buttons">
          <table className="showcase-table">
            <tbody>
              <tr>
                <td></td>
                <th>(S) h28px w166px</th>
                <th>(M) h36px w240px</th>
                <th>(L)h44px w322px</th>
                <th>(XL)h54px w412px</th>
              </tr>
              <tr>
                <th>Default</th>
                <td>
                  <Textbox type="text" placeholder="Select Item" size="sm" />
                </td>
                <td>
                  <Textbox type="text" placeholder="Select Item" size="md" />
                </td>
                <td>
                  <Textbox type="text" placeholder="Select Item" size="lg" />
                </td>
                <td>
                  <Textbox type="text" placeholder="Select Item" size="xl" />
                </td>
              </tr>
              <tr>
                <th>Disabled</th>
                <td>
                  <Textbox
                    type="text"
                    placeholder="Select Item"
                    size="sm"
                    disabled
                  />
                </td>
                <td>
                  <Textbox
                    type="text"
                    placeholder="Select Item"
                    size="md"
                    disabled
                  />
                </td>
                <td>
                  <Textbox
                    type="text"
                    placeholder="Select Item"
                    size="lg"
                    disabled
                  />
                </td>
                <td>
                  <Textbox
                    type="text"
                    placeholder="Select Item"
                    size="xl"
                    disabled
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="showcase-wrapper">
        <H3>(Textbox 2) Outline Textbox with icon left, 2px Outline</H3>
        <div className="showcase-buttons">
          <table className="showcase-table">
            <tbody>
              <tr>
                <td></td>
                <th>(S) h28px w166px</th>
                <th>(M) h36px w240px</th>
                <th>(L)h44px w322px</th>
                <th>(XL)h54px w412px</th>
              </tr>
              <tr>
                <th>Default</th>
                <td>
                  <TextboxIconLeft
                    type="text"
                    placeholder="Enter Date"
                    size="sm"
                  />
                </td>
                <td>
                  <TextboxIconLeft
                    type="text"
                    placeholder="Enter Date"
                    size="md"
                  />
                </td>
                <td>
                  <TextboxIconLeft
                    type="text"
                    placeholder="Enter Date"
                    size="lg"
                  />
                </td>
                <td>
                  <TextboxIconLeft
                    type="text"
                    placeholder="Enter Date"
                    size="xl"
                  />
                </td>
              </tr>
              <tr>
                <th>Disabled</th>
                <td>
                  <TextboxIconLeft
                    type="text"
                    placeholder="Select Item"
                    size="sm"
                    disabled
                  />
                </td>
                <td>
                  <TextboxIconLeft
                    type="text"
                    placeholder="Select Item"
                    size="md"
                    disabled
                  />
                </td>
                <td>
                  <TextboxIconLeft
                    type="text"
                    placeholder="Select Item"
                    size="lg"
                    disabled
                  />
                </td>
                <td>
                  <TextboxIconLeft
                    type="text"
                    placeholder="Select Item"
                    size="xl"
                    disabled
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="showcase-wrapper">
        <H3>(Textbox 3 )Outline Textbox with icon right, 2px Outline</H3>
        <div className="showcase-buttons">
          <table className="showcase-table">
            <tbody>
              <tr>
                <td></td>
                <th>(S) h28px w166px</th>
                <th>(M) h36px w240px</th>
                <th>(L)h44px w322px</th>
                <th>(XL)h54px w412px</th>
              </tr>
              <tr>
                <th>Default</th>
                <td>
                  <TextboxIconRight
                    type="text"
                    placeholder="Enter Date"
                    size="sm"
                  />
                </td>
                <td>
                  <TextboxIconRight
                    type="text"
                    placeholder="Enter Date"
                    size="md"
                  />
                </td>
                <td>
                  <TextboxIconRight
                    type="text"
                    placeholder="Enter Date"
                    size="lg"
                  />
                </td>
                <td>
                  <TextboxIconRight
                    type="text"
                    placeholder="Enter Date"
                    size="xl"
                  />
                </td>
              </tr>
              <tr>
                <th>Disabled</th>
                <td>
                  <TextboxIconRight
                    type="text"
                    placeholder="Select Item"
                    size="sm"
                    disabled
                  />
                </td>
                <td>
                  <TextboxIconRight
                    type="text"
                    placeholder="Select Item"
                    size="md"
                    disabled
                  />
                </td>
                <td>
                  <TextboxIconRight
                    type="text"
                    placeholder="Select Item"
                    size="lg"
                    disabled
                  />
                </td>
                <td>
                  <TextboxIconRight
                    type="text"
                    placeholder="Select Item"
                    size="xl"
                    disabled
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ShowcaseTextbox;
