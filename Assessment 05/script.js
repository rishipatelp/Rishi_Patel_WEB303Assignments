/*
    Assignment 05
    Name: - Rishi Patel
    StudentID: - 0793722
*/

$(document).ready(function () {
   
    let randomID = () => {
        let rand = Math.floor(Math.random() * 26) + Date.now();
        return rand;
      };
    
      class ContentItem {
        constructor(title, description, category) {
          this.id = randomID();
          this.title = title;
          this.description = description;
          this.category = category;
        }
    
        updateContent(title, description, category) {
          title ? (this.title = title) : null;
          description ? (this.description = description) : null;
          category ? (this.category = category) : null;
        }
    
        toString() {
          let containerID = "container-".concat(this.id.toString());
          let container = $(document.createElement("div"));
          let titleElement = $("<h4>" + this.title + "</h4>");
          let descriptionElement = $("<p>" + this.description + "</p>");
          let categoryElement = $("<div>" + this.category + "</div>");
    
          container.append(titleElement, descriptionElement, categoryElement);
          return container
            .css({ border: "1px solid black", margin:"0px 0px 15px 0px", padding: "0px 10px 25px 10px" })
            .attr("id", containerID);
        }
      }
    
      let contentCards = [
        {
          title: "Beloved",
          description:
            "Toni Morrison’s 1987 spiritual and haunting novel Beloved tells the story of an escaped slave named Sethe who has fled to Cincinnati, Ohio, in the year 1873. The novel investigates the trauma of slavery even after freedom has been gained, depicting Sethe’s guilt and emotional pain after having killed her own child, whom she named Beloved, to keep her from living life as a slave.",
          category: "Drama",
        },
        {
          title: "To Kill a Mockingbird",
          description:
            "The novel examines racism in the American South through the innocent wide eyes of a clever young girl named Jean Louise (“Scout”) Finch. Its iconic characters, most notably the sympathetic and just lawyer and father Atticus Finch, served as role models and changed perspectives in the United States at a time when tensions regarding race were high. To Kill a Mockingbird earned the Pulitzer Prize for fiction in 1961 and was made into an Academy Award-winning film in 1962, giving the story and its characters further life and influence over the American social sphere.",
          category: "Classic",
        },
        {
          title: "The Color Purple",
          description:
            "Though the epistolary novel (a novel in the form of letters written by one or more characters) was most popular before the 19th century, Alice Walker became a champion of the style with her 1982 Pulitzer Prize- and National Book Award-winning novel The Color Purple. Set in the post-Civil War American South, the novel follows a young African American girl named Celie into adulthood in letters she writes to God and to her sister Nettie.",
          category: "Drama",
        },
        {
          title: "Invisible Man",
          description:
            "Invisible Man is a groundbreaking novel in the expression of identity for the African American male. The narrator of the novel, a man who is never named but believes he is “invisible” to others socially, tells the story of his move from the South to college and then to New York City. In each location he faces extreme adversity and discrimination, falling into and out of work, relationships, and questionable social movements in a wayward and ethereal mindset. The novel is renowned for its surreal and experimental style of writing that explores the symbolism surrounding African American identity and culture. Invisible Man won the U.S. National Book Award for Fiction in 1953.",
          category: "Fiction",
        },
        {
          title: "Scotland Street",
          description:
            "The first selection on this list, British writer Alexander McCall Smith’s 44 Scotland Street (2005)—the first book in a series of the same name—takes readers to a bustling bohemian street in Edinburgh’s New Town, specifically to building No. 44. There we are introduced to an eccentric widow, a self-preening-obsessed surveyor, and a mother determined to have her five-year-old son master the saxophone and the Italian language. Charming, humorous, and relevant, 44 Scotland Street portrays everyday life in New Town as it exists today, complete with cameos of popular real-life Edinburgh figures, among them Ian Rankin and Malcolm Rifkind.”",
          category: "Classic",
        },
      ];
    
      contentCards.forEach((contentCard) => {
        let content = new ContentItem(
          contentCard.title,
          contentCard.description,
          contentCard.category
        );
        $("#content-list").append(content.toString());
      });

});


