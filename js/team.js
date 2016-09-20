$(document).ready(function(){

var suneet = '<div class="board-member-header">' +
                        '<h1>Ron Cobb</h1>' +
                        '<h2>Partner</h2>' +
                        '</div>' +
                        '<div class="board-member-info">' +
                        '<p>Ron began his professional career in real estate as a construction Project Manager with a major regional construction company. His most notable project included managing the construction of the $50MM Tonopalo luxury timeshare project in Lake Tahoe, CA. In that capacity, he was responsible for all phases of development from securing pre-development entitlements through owner acceptance of individual units. Tonopalo has since become a model for best practices used in the development of beach front property in the Lake Tahoe Basin by the Tahoe Regional Planning Agency. Also in the Lake Tahoe Basin, Ron oversaw the construction of the successful retail component of the Heavenly Village in Stateline, NV. Prior to these projects, he oversaw the remodel of a 40 year old motel into what is now the $100MM Siena Hotel Spa Casino in downtown Reno, NV. The remodel added luxury suites, a spa ranked in the top five of all spas in the West.  In addition to his duties as a commercial real estate broker and partner with Commercial Partners of Nevada, Ron serves as Managing Partner of New Mexico’s preeminent active adult community, Jubilee Los Lunas where he oversees the development of this 422 unit subdivision. <br><br> Ron is also a distinguished public servant. He spent four years on both the Airport Authority Advisory Board and the Home Consortium Advisory Board. He spent three and a half years with the Washoe County Planning Commission and served one year as its Chairman. Most recently, Ron completed nearly eight years on the City of Reno Planning Commission with three years as its Chairman. In these roles, Ron has helped shape the future of Reno by advising the City of Reno Council on a myriad of issues, including natural resources, economics, housing, population, land use and zoning. Furthermore, he has reviewed and' +
            						' advised on all major development projects proposed within the City.</p>' +
                        '</div>';

var name2 = '<div class="board-member-header">' +
                        '<h1>Peter Ghishan, Esq.</h1>' +
                        '<h2>Partner</h2>' +
                        '</div>' +
                        '<div class="board-member-info">' +
                        '<p>Peter Ghishan brings more than ten years of diverse professional experience to First Capital Builders. Peter began his professional career as an attorney working for a regional media holding company based in Las Vegas, NV where he developed skills in real estate, finance, contract, administrative, intellectual property, and employment law. In 2005, Peter moved to real estate full time where he developed nearly $10MM in residential projects in Lake Tahoe, overseeing all aspects of development from project underwriting, financing, negotiating all entitlements, construction management, and sales oversight. In his role as a commercial real estate broker with Commercial Partners of Nevada, Peter has assisted a number of developers, lenders, and investors in their acquisition and disposition of more than $50MM in commercial real estate assets.  Moreover, his business includes advising clients on a variety of non-sales related issues including valuation, entitlements, re-positioning, and long range planning.  Most recently, Peter assists in the management and development of New Mexico’s preeminent active adult community, Jubilee Los Lunas, which is a 422 unit residential subdivision. 	<br><br> Peter graduated from Duke University in 1999 with a degree in Environmental Science & Policy and a minor in Geology and from the University of Arizona College of Law in 2002, where he was a member of the Arizona Law Review. Peter holds his New Mexico and Nevada real estate broker licenses and is an inactive member of the State Bars of Nevada, Arizona, California, Idaho,' +
                        'and Montana.</p>' +
                        '</div>';

var name3 = '<div class="board-member-header">' +
                        '<h1>Windy Myers</h1>' +
                        '<h2>Controller</h2>' +
                        '</div>' +
                        '<div class="board-member-info">' +
                        '<p>Windy Myers has been active in real estate development and construction since 2000 primarily focusing her efforts on all accounting, forward planning, financial analysis and reporting functions for developers, builders, and subcontractors. Windy currently serves as First Capital’s Controller and is responsible for all financial reporting, operation and construction budgets, as well as all insurance, human resources, and financing needs of the organization. Her past experience includes work as an Accounting Manager for Tanamera Homes in Reno, an Accountant for Merga Foundations, a Santa Rosa concrete subcontractor with $10MM in annual sales, a Financial Analyst with Christopherson Homes in Santa Rosa, and Controller for Jenamar Communities, a Sacramento based land developer and home builder with annual sales in excess of $100MM. Windy has managed the accounting functions of real estate developments in California, Nevada, New Mexico and Washington. Her vast experience in accounting and finance management has brought several successful real estate projects to completion. 	<br><br> Windy graduated from the University of Nevada with a B.S in Accounting. She is proficient in the use of Microsoft Word, Excel, Access, FileMaker Pro, Macola, FAST,' +
                        'Timberline, Mark Systems, Maxwell, and Quickbooks.</p>' +
                        '</div>';

var name4 = '<div class="board-member-header">' +
                        '<h1>Name 4</h1>' +
                        '<h2>Chairman, CEO</h2>' +
                        '</div>' +
                        '<div class="board-member-info">' +
                        '<p>First Capital is led by its Chairman and CEO, Suneet Singal. Mr. Singal began his real estate' +
                        ' finance career in 2001 in lending origination before forming First Capital in 2003. In 2006, Mr. Singal' +
                        ' acquired and merged with a real estate lending platform, Amerifund Financial, and grew the combined ' +
                        'company to over $1 billion a year in originations in both retail and wholesale as a direct lender with ' +
                        'business in over 40 states. After the real estate market turn in 2007-08, Mr. Singal, through First Capital,' +
                        ' mapped over 12 projects in California encompassing the following asset types: industrial, retail, multifamily, ' +
                        'senior assisted living, hospitality and mixed use with aggregate values of over $250 million. Mr. Singal has' +
                        'finance and development experience in multiple asset classes, ranging from residential and commercial retail and wholesale ' +
                        'loan origination, underwriting and securitization, and development to the acquisition of raw unentitled land, entitlement ' +
                        ' completion and map approvals, bond financing, infrastructure build-out and vertical construction, real estate asset ' +
                        'rehab, and asset lease-up to stabilization. Mr. Singal holds a Bachelor of Arts degree in Finance from California State ' +
                        'University-Sacramento with a concentration in Investments.</p>' +
                        '</div>';

var name5 = '<div class="board-member-header">' +
                        '<h1>Name 5</h1>' +
                        '<h2>Chairman, CEO</h2>' +
                        '</div>' +
                        '<div class="board-member-info">' +
                        '<p>First Capital is led by its Chairman and CEO, Suneet Singal. Mr. Singal began his real estate' +
                        ' finance career in 2001 in lending origination before forming First Capital in 2003. In 2006, Mr. Singal' +
                        ' acquired and merged with a real estate lending platform, Amerifund Financial, and grew the combined ' +
                        'company to over $1 billion a year in originations in both retail and wholesale as a direct lender with ' +
                        'business in over 40 states. After the real estate market turn in 2007-08, Mr. Singal, through First Capital,' +
                        ' mapped over 12 projects in California encompassing the following asset types: industrial, retail, multifamily, ' +
                        'senior assisted living, hospitality and mixed use with aggregate values of over $250 million. Mr. Singal has' +
                        'finance and development experience in multiple asset classes, ranging from residential and commercial retail and wholesale ' +
                        'loan origination, underwriting and securitization, and development to the acquisition of raw unentitled land, entitlement ' +
                        ' completion and map approvals, bond financing, infrastructure build-out and vertical construction, real estate asset ' +
                        'rehab, and asset lease-up to stabilization. Mr. Singal holds a Bachelor of Arts degree in Finance from California State ' +
                        'University-Sacramento with a concentration in Investments.</p>' +
                        '</div>';


        $(".name").click(function(){

          console.log("hello");

             $(".name").removeClass("name-active");
             $(this).addClass("name-active");

             if($(this).hasClass("suneet-tab")){
               $(".board-info-container").html(suneet);
             } else if ($(this).hasClass("name2-tab")) {
               $(".board-info-container").html(name2);
             } else if ($(this).hasClass("name3-tab")) {
               $(".board-info-container").html(name3);
             } else if ($(this).hasClass("name4-tab")) {
               $(".board-info-container").html(name4);
             } else if ($(this).hasClass("name5-tab")) {
               $(".board-info-container").html(name5);
             }
        });

});
