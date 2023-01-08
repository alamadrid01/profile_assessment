import React from "react";
import "../styles/Profile.scss"

function Profile() {
  return (
    <div className="profile">
      <main>
        <img src="" alt="" />
        <h2>User Details</h2>
        <div className="top">
          <div className="data">
            <img src="" alt="" />
            <h4>Grace</h4>
            <p>LGBTQ</p>
          </div>
          <div className="review">
            <p>User's Tier</p>
          </div>
          <div className="amount">
            <h4>20,000.00</h4>
          </div>
        </div>
        <div className="body">
          <section>
            <h4>Personal Information</h4>
            <table>
              <tr>
                <th>FULL NAME</th>
                <th>PHONE NUMBER</th>
                <th>EMAIL ADDRESS</th>
                <th>BVN</th>
                <th>FEMALE</th>
                <th>MARITAL STATUS</th>
                <th>CHILDREN</th>
                <th>TYPE OF RESIDENCE</th>
              </tr>
              <tr>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
              </tr>
            </table>
            <hr />
          </section>
          <section>
            <h4>Education and Emloyment</h4>
            <table>
              <tr>
                <th>Level of Education</th>
                <th>Employment status</th>
                <th>Sector of Employment</th>
                <th>Duration of Employment</th>
                <th>Office email</th>
                <th>Monthly income</th>
                <th>Loan repayment</th>
              </tr>
              <tr>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
              </tr>
            </table>
            <hr />
          </section>
          <section>
            <h4>SOCIALS</h4>
            <table>
              <tr>
                <th>Twitter</th>
                <th>Facebook</th>
                <th>Instagram</th>
              </tr>
              <tr>
                <td>test</td>
                <td>test</td>
                <td>test</td>
              </tr>
            </table>
            <hr />
          </section>
          <section>
            <h4>Guarantor</h4>
            <table>
              <tr>
                <th>FULL NAME</th>
                <th>PHONE NUMBER</th>
                <th>EMAIL ADDRESS</th>
                <th>Relationship</th>
              </tr>
              <tr>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
              </tr>
            </table>
            <hr />
          </section>
          <section>
            <table>
              <tr>
                <th>FULL NAME</th>
                <th>PHONE NUMBER</th>
                <th>EMAIL ADDRESS</th>
                <th>Relationship</th>
              </tr>
              <tr>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
              </tr>
            </table>
            <hr />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Profile;
