import React from "react";
import { H3 } from "../../ui/Typography";
import "./Showcase.scss";
import { Button, ButtonWithIcon, ButtonWithTextIcon } from "../../ui";

function ShowcaseButtons() {
  return (
    <>
      <div className="showcase-wrapper">
        <H3>(CTA-1) Outline Button, 2px Outline</H3>
        <div className="showcase-buttons">
          <table className="showcase-table">
            <tbody>
              <tr>
                <td></td>
                <th>S-h28px</th>
                <th>M-h36px</th>
                <th>L-h44px</th>
                <th>XL-h54px</th>
              </tr>
              <tr>
                <th>Default</th>
                <td>
                  <Button size="sm" variant="primary">
                    Download
                  </Button>
                </td>
                <td>
                  <Button size="md" variant="primary">
                    Download
                  </Button>
                </td>
                <td>
                  <Button size="lg" variant="primary">
                    Download
                  </Button>
                </td>
                <td>
                  <Button size="xl" variant="primary">
                    Download
                  </Button>
                </td>
              </tr>
              <tr>
                <th>Disabled</th>
                <td>
                  <Button size="sm" variant="primary" disabled>
                    Download
                  </Button>
                </td>
                <td>
                  <Button size="md" variant="primary" disabled>
                    Download
                  </Button>
                </td>
                <td>
                  <Button size="lg" variant="primary" disabled>
                    Download
                  </Button>
                </td>
                <td>
                  <Button size="xl" variant="primary" disabled>
                    Download
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="showcase-wrapper">
        <H3>(CTA-2) Outline Button, 2px Outline (hover fill)</H3>
        <div className="showcase-buttons">
          <table className="showcase-table">
            <tbody>
              <tr>
                <td></td>
                <th>S-h28px</th>
                <th>M-h36px</th>
                <th>L-h44px</th>
                <th>XL-h54px</th>
              </tr>
              <tr>
                <th>Default</th>
                <td>
                  <Button size="sm" variant="secondary">
                    Download
                  </Button>
                </td>
                <td>
                  <Button size="md" variant="secondary">
                    Download
                  </Button>
                </td>
                <td>
                  <Button size="lg" variant="secondary">
                    Download
                  </Button>
                </td>
                <td>
                  <Button size="xl" variant="secondary">
                    Download
                  </Button>
                </td>
              </tr>
              <tr>
                <th>Disabled</th>
                <td>
                  <Button size="sm" variant="secondary" disabled>
                    Download
                  </Button>
                </td>
                <td>
                  <Button size="md" variant="secondary" disabled>
                    Download
                  </Button>
                </td>
                <td>
                  <Button size="lg" variant="secondary" disabled>
                    Download
                  </Button>
                </td>
                <td>
                  <Button size="xl" variant="secondary" disabled>
                    Download
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="showcase-wrapper">
        <H3>(CTA-3) Outline Button with icon, 2px Outline</H3>
        <div className="showcase-buttons">
          <table className="showcase-table">
            <tbody>
              <tr>
                <td></td>
                <th>S-h28px</th>
                <th>M-h36px</th>
                <th>L-h44px</th>
                <th>XL-h54px</th>
              </tr>
              <tr>
                <th>Default</th>
                <td>
                  <ButtonWithTextIcon size="sm" variant="primary">
                    Download
                  </ButtonWithTextIcon>
                </td>
                <td>
                  <ButtonWithTextIcon size="md" variant="primary">
                    Download
                  </ButtonWithTextIcon>
                </td>
                <td>
                  <ButtonWithTextIcon size="lg" variant="primary">
                    Download
                  </ButtonWithTextIcon>
                </td>
                <td>
                  <ButtonWithTextIcon size="xl" variant="primary">
                    Download
                  </ButtonWithTextIcon>
                </td>
              </tr>
              <tr>
                <th>Disabled</th>
                <td>
                  <ButtonWithTextIcon size="sm" variant="primary" disabled>
                    Download
                  </ButtonWithTextIcon>
                </td>
                <td>
                  <ButtonWithTextIcon size="md" variant="primary" disabled>
                    Download
                  </ButtonWithTextIcon>
                </td>
                <td>
                  <ButtonWithTextIcon size="lg" variant="primary" disabled>
                    Download
                  </ButtonWithTextIcon>
                </td>
                <td>
                  <ButtonWithTextIcon size="xl" variant="primary" disabled>
                    Download
                  </ButtonWithTextIcon>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="showcase-wrapper">
        <H3>(CTA-4) Outline Button with icon, 2px Outline (hover fill)</H3>
        <div className="showcase-buttons">
          <table className="showcase-table">
            <tbody>
              <tr>
                <td></td>
                <th>S-h28px</th>
                <th>M-h36px</th>
                <th>L-h44px</th>
                <th>XL-h54px</th>
              </tr>
              <tr>
                <th>Default</th>
                <td>
                  <ButtonWithTextIcon size="sm" variant="secondary">
                    Download
                  </ButtonWithTextIcon>
                </td>
                <td>
                  <ButtonWithTextIcon size="md" variant="secondary">
                    Download
                  </ButtonWithTextIcon>
                </td>
                <td>
                  <ButtonWithTextIcon size="lg" variant="secondary">
                    Download
                  </ButtonWithTextIcon>
                </td>
                <td>
                  <ButtonWithTextIcon size="xl" variant="secondary">
                    Download
                  </ButtonWithTextIcon>
                </td>
              </tr>
              <tr>
                <th>Disabled</th>
                <td>
                  <ButtonWithTextIcon size="sm" variant="secondary" disabled>
                    Download
                  </ButtonWithTextIcon>
                </td>
                <td>
                  <ButtonWithTextIcon size="md" variant="secondary" disabled>
                    Download
                  </ButtonWithTextIcon>
                </td>
                <td>
                  <ButtonWithTextIcon size="lg" variant="secondary" disabled>
                    Download
                  </ButtonWithTextIcon>
                </td>
                <td>
                  <ButtonWithTextIcon size="xl" variant="secondary" disabled>
                    Download
                  </ButtonWithTextIcon>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="showcase-wrapper">
        <H3>(CTA-5) Floating Button 2px Outline</H3>
        <div className="showcase-buttons">
          <table className="showcase-table">
            <tbody>
              <tr>
                <td></td>
                <th>S-h28px</th>
                <th>M-h36px</th>
                <th>L-h44px</th>
                <th>XL-h54px</th>
              </tr>
              <tr>
                <th>Default</th>
                <td>
                  <ButtonWithIcon size="sm" variant="primary" />
                </td>
                <td>
                  <ButtonWithIcon size="md" variant="primary" />
                </td>
                <td>
                  <ButtonWithIcon size="lg" variant="primary" />
                </td>
                <td>
                  <ButtonWithIcon size="xl" variant="primary" />
                </td>
              </tr>
              <tr>
                <th>Disabled</th>
                <td>
                  <ButtonWithIcon size="sm" variant="primary" disabled />
                </td>
                <td>
                  <ButtonWithIcon size="md" variant="primary" disabled />
                </td>
                <td>
                  <ButtonWithIcon size="lg" variant="primary" disabled />
                </td>
                <td>
                  <ButtonWithIcon size="xl" variant="primary" disabled />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="showcase-wrapper">
        <H3>(CTA-6) Floating Button 2px Outline (hover fill) </H3>
        <div className="showcase-buttons">
          <table className="showcase-table">
            <tbody>
              <tr>
                <td></td>
                <th>S-h28px</th>
                <th>M-h36px</th>
                <th>L-h44px</th>
                <th>XL-h54px</th>
              </tr>
              <tr>
                <th>Default</th>
                <td>
                  <ButtonWithIcon size="sm" variant="secondary" />
                </td>
                <td>
                  <ButtonWithIcon size="md" variant="secondary" />
                </td>
                <td>
                  <ButtonWithIcon size="lg" variant="secondary" />
                </td>
                <td>
                  <ButtonWithIcon size="xl" variant="secondary" />
                </td>
              </tr>
              <tr>
                <th>Disabled</th>
                <td>
                  <ButtonWithIcon size="sm" variant="secondary" disabled />
                </td>
                <td>
                  <ButtonWithIcon size="md" variant="secondary" disabled />
                </td>
                <td>
                  <ButtonWithIcon size="lg" variant="secondary" disabled />
                </td>
                <td>
                  <ButtonWithIcon size="xl" variant="secondary" disabled />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ShowcaseButtons;
