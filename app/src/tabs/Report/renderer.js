/*----------------------------------------------------------------------------
*
*     Copyright © 2022 THALES. All Rights Reserved.
 *
* -----------------------------------------------------------------------------
* THALES MAKES NO REPRESENTATIONS OR WARRANTIES ABOUT THE SUITABILITY OF
* THE SOFTWARE, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 * TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE, OR NON-INFRINGEMENT. THALES SHALL NOT BE
 * LIABLE FOR ANY DAMAGES SUFFERED BY LICENSEE AS A RESULT OF USING,
 * MODIFYING OR DISTRIBUTING THIS SOFTWARE OR ITS DERIVATIVES.
*
* THIS SOFTWARE IS NOT DESIGNED OR INTENDED FOR USE OR RESALE AS ON-LINE
* CONTROL EQUIPMENT IN HAZARDOUS ENVIRONMENTS REQUIRING FAIL-SAFE
* PERFORMANCE, SUCH AS IN THE OPERATION OF NUCLEAR FACILITIES, AIRCRAFT
* NAVIGATION OR COMMUNICATION SYSTEMS, AIR TRAFFIC CONTROL, DIRECT LIFE
* SUPPORT MACHINES, OR WEAPONS SYSTEMS, IN WHICH THE FAILURE OF THE
* SOFTWARE COULD LEAD DIRECTLY TO DEATH, PERSONAL INJURY, OR SEVERE
* PHYSICAL OR ENVIRONMENTAL DAMAGE ("HIGH RISK ACTIVITIES"). THALES
* SPECIFICALLY DISCLAIMS ANY EXPRESS OR IMPLIED WARRANTY OF FITNESS FOR
* HIGH RISK ACTIVITIES.
* -----------------------------------------------------------------------------
*/
/* global $ tinymce */

(async () => {
    try {

        $(document).ready(function () {
            window.project.load(async (event, data) => {
                const { Vulnerability, Risk, ISRAmeta } = await JSON.parse(data);
                Vulnerability.forEach((vulnerability) => {
                    const { vulnerabilityId, vulnerabilityName, overallScore, overallLevel } = vulnerability;
                    let color = 'black';
                    if (overallLevel === 'High') color = 'red';
                    else if (overallLevel === 'Medium') color = 'orange'

                    $('#vulnerabilites tbody').append(`<tr>
                    <td>${vulnerabilityId}</td>
                    <td>${vulnerabilityName}</td>
                    <td style="color: ${overallScore === null ? 'red' : 'black'}">${overallScore === null ? 'NaN' : overallScore}/10</td>
                    <td style="color: ${color}; font-weight: bold;">${overallLevel}</td>
                    </td>`);
                });
            });
        });

    } catch (err) {
        alert('Failed to load report tab');
    }
})();
