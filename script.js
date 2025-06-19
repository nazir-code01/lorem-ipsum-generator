const userInput = document.querySelector(".quantity");
const generateButton = document.querySelector(".generate-button");
const textSection = document.querySelector(".text-section");
const resetButton = document.querySelector(".reset-button");

window.addEventListener("DOMContentLoaded", () => {
    const generateWords = () => {
        const loremIpsumText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit dolor porro, iusto nisi, id saepe ex repellat non repudiandae recusandae ad culpa quae quam adipisci sed, mollitia similique ea repellendus sunt quo ipsa. Voluptatem deleniti nemo, quisquam incidunt temporibus harum ducimus neque corporis, iusto consectetur reiciendis inventore recusandae nostrum eos id officiis, quis nam tempore! Vero magni ullam consequuntur iste voluptate minus pariatur recusandae doloremque ab, molestiae commodi aspernatur, omnis reprehenderit perferendis natus veniam exercitationem, voluptas eveniet sed in? Animi magni ea alias quaerat? Quam, aperiam? Doloremque exercitationem deleniti dicta, consequatur enim laborum aliquam, voluptatibus quo eveniet nesciunt veritatis unde, quae facilis praesentium iure nobis. Magni mollitia cum debitis aliquam pariatur odit et ad error, unde aspernatur. Reprehenderit minima magni soluta labore quaerat quam commodi consequatur molestias enim nisi laudantium similique fugit ex, impedit repudiandae aspernatur, officiis possimus error aliquam accusamus magnam mollitia est. Ipsum, magnam est, autem eos maxime suscipit incidunt sint aliquid nemo voluptas amet blanditiis laboriosam veritatis voluptatem. Dicta eligendi, in error quibusdam similique commodi animi sit! Nostrum voluptatem libero maxime sequi id maiores incidunt. Vel corporis ab dolorum similique. Eveniet temporibus quos aspernatur ipsa animi, quam quae facere. Ut culpa esse vitae facere! Adipisci impedit neque velit minus inventore, explicabo dolores atque tempore harum, nostrum quos numquam. Fuga sint, assumenda inventore eveniet maiores blanditiis distinctio deleniti repellendus aliquid itaque quas corrupti consequatur? Itaque id fugiat dolor. Consectetur debitis doloribus aliquam laudantium, nihil quasi ratione animi maiores porro cumque reprehenderit nisi voluptate possimus, dignissimos magnam assumenda architecto, veritatis ullam aperiam vero sit laborum? Dolor qui at officiis ratione fugiat saepe? Velit sapiente id sed enim iusto corrupti amet quaerat ea impedit dolore rem aliquid, saepe itaque a omnis doloremque voluptatibus excepturi sequi. Quibusdam, dolor deleniti in libero ipsa veritatis fugiat facilis recusandae officia ducimus adipisci dolores nisi aliquid eveniet. Dolorum ipsa quaerat nostrum iste, expedita consequuntur quia, similique minima officiis labore eligendi cumque laboriosam reprehenderit at deserunt voluptatibus ducimus autem, aliquid tempore pariatur. Modi explicabo numquam at a illo facere quae saepe dolorem vitae, fuga recusandae ad, iste dolores odit repellat consectetur natus. Vero soluta nesciunt mollitia quos omnis dolorum veritatis, tempore animi dolor tenetur accusantium dolore culpa ipsum neque harum repellat cupiditate alias delectus, voluptatem corporis reprehenderit modi, perferendis quaerat? Ab optio voluptatem nobis, quasi asperiores quas nesciunt vero quis voluptatibus perspiciatis reprehenderit modi cupiditate quod quam sed repellat illum inventore deserunt exercitationem ut recusandae. Error minus laboriosam omnis praesentium et ipsam, dolorem, nulla fuga qui atque unde impedit reprehenderit dolore doloremque porro, cum natus recusandae officiis maxime neque. Cumque accusantium fugit quaerat architecto fugiat optio quos modi ducimus numquam debitis reprehenderit nobis totam eligendi nesciunt, aut laborum explicabo ipsa placeat eum quas. Assumenda iusto itaque sint maxime necessitatibus voluptas libero mollitia fugiat, nobis exercitationem provident, dicta consequatur? Sint dolorem laudantium sequi quam laboriosam quod consequuntur! Veritatis delectus ea illum maiores atque autem iure aperiam, neque quisquam praesentium expedita excepturi non dolorem placeat minus eius perspiciatis ad iste ut? Eius labore aspernatur sapiente ratione deserunt";

        const words = loremIpsumText.split(" ");

        let showWordsAccordingToUserInput = words.slice(0, userInput.value).join(" ");
        let allWords = words.join(" ");

        let text = document.createElement("h2");
        text.classList.add("text");

        if (userInput.value <= words.length) {
            text.innerHTML = showWordsAccordingToUserInput;
            textSection.appendChild(text);
        } else {
            text.innerHTML = allWords;
            textSection.appendChild(text);
        }

        userInput.value = "";
    }


    generateButton.addEventListener("click", () => {
        generateWords();
    });


    userInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            if (userInput.value > 0) {
                generateWords();
            } else if (userInput.value <= 0) {
                alert("Please enter a valid number !");
            }
        }
    })

    resetButton.addEventListener("click", () => {
        textSection.innerHTML = "";
    })
})