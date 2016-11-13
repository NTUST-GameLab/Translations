## 3. 生成語法 (Generative Grammars)

生成語法源自於語言學，並作為於描述片語集合的模型。理論上，建立生成語法便可以從中產生正確的語言片語。一個生成語法通常由**字母表 (Alphabet)** 與**規則 (set of rules)** 所組成[13]。字母表是語法中所使用到的符號之集合；規則則採用改寫的方式進行，一項規則能夠指定什麼樣的符號（組）會被其它的符號（組）給替代，而形成其它的新字串。舉例來說，語法當中的規則可以指定符號裡的一段字串，將符號「S」替換成符號組「ab」，而這樣的規則下一般可以用「S→ab」來表示。

生成語法通常使用箭頭右側的符號（組）用以取代箭頭左側的符號（組）。因此，通常待替換的符號稱為**規則左側 (Left-hand side of the rule)**；並將新符號稱為**規則右側 (Right-hand side of the rule)**。字母表中的一些符號因為沒有指定替換的規則而從不被替換，這些符號稱為**終端 (terminal)** 並依照慣例以小寫字元表示。在前述範例的「a、b」即為終端符號，而非終端符號將具有指定他們進行替換的規則以及常規用大寫字元表示等，先前範例中的符號「S」便是之一。對於描述自然語言句子的語法來說，終端符號可以是文字，而非終端符號表示功能性的文字組合，例如名詞片語和動詞片語。「S」時常被作為語法的起始符號，一生成語法至少需要一個符號被置換，而不能從無開始。因此，完整的生成語法亦制定了起始符號。

像這樣的語法用於計算機科學以**創造語言**與代碼解析器，它們被設計為理解和識別語言。然而，語法也適合於**生成語言**。很容易見到看到簡單的規則能夠產生出相當有趣的結果，特別是當這些規則允許遞迴時：當規則產生的非終端符號，直接或是間接地導致相同規則產生。「S→abS」是遞迴規則中的範例，將會產生出無止盡的「abS」字串。「S→aSb」是另一個範例，並生成字串的「a」會隨著後方相等數量的「b」。為了自然語言所開發的生成語法能夠領悟超越單一單字水平的概念，例如參數構造與修辭。這意味著生成語法為了開發遊戲的應該能夠抓到更高級別的設計原則，進而在微觀與宏觀中引出有趣的關卡。

當以下的情形符合時，生成語法可被用來描述遊戲。首先，語法的字母表由一系列的符號組成，用以表示遊戲當中的特定概念。以及，規則定義了合理的方法，在前述概念能夠被組合後創建出良好的關卡。舉例來說，一語法描述冒險遊戲其可能的關卡，可能包括了終端符號「key」、「lock」、「room」、「monster」、「treasure」。而該語法的規則可能包含下列所述：

1. Dungeon → Obstacle + treasure
2. Obstacle → key + Obstacle + lock + Obstacle
3. Obstacle → monster + Obstacle
4. Obstacle → room

在上述的列舉中，當多項規則指定以*相同的非終端符號*進行可能性的替換，僅只會有一項規則會被套用。可以亂數隨機地進行，並能夠產生各式各樣的字串，結果可能包括了:

1. key + monster + room + lock + monster + room + treasure
2. key + monster + key + room + lock + monster + room + lock + room + treasure
3. room + treasure
4. monster + monster + monster + monster + room + treasure
 
上述討論的語法所產生的字串並非都適合遊戲關卡，特別是上述第三個字串過短。問題不是採用了生成語法，而是舉例中使用規則的品質、質量。事實上，生成語法可以透過建立更好地抓住關卡設計原理的規則，來輕鬆地解決這些問題，像是:

1. Dungeon → Obstacle + Obstacle + Obstacle + Obstacle + treasure
2. Dungeon → Threshold Guardian + Obstacle + Mini-Boss + reward + Obstacle + Level-Boss + treasure

如果規則一包含了一個想法，一個地下城需要有一個最小長度的語法會是有趣的。規則二直接結合 **three act story structure** 來描述了 *Zelda: The Twilight Princess* 遊戲中的關卡 *Forest Temple*。

生成語法可以透過不同的方式來生成遊戲內容，遊戲專家與設計師可以產生語法來為特定的遊戲生成內容。起初編寫出這樣的語法不會是件容易的事情，但是擴增內容能夠被生成或調整的輕鬆程度是一開始的努力遠遠不及的。此外，語法和程序化內容能夠自動化設計一部分任務來輔佐設計師，而這方法被遊戲公司 Epic Games 用於生成建築物與大型城市景觀。它被證明是非常通用的方法，因為它允許設計師在相同的限制下，使用新的規則而不必重作整個部分，快速地重新生成先前幾個部分[14]。最後，可以從測試環境中選擇內容成功的**演化式演算法 (Evolutionary Algorithms)** 來生成語法。本文所提出的語法皆使用第一種方法來擬稿，演化式的語法雖然聽起來是個相當誘人的概念，但它超出了這裡所提及的知識範疇。

生成語法的相關應用也可以在 **Lindenmayer Systems (L-Systems)** 中發現。Lindenmayer 是一位生物學家，他利用了語法來描述植物的生長狀況，不過 L-Systems 已被應用在產生許多不同的空間輸出[15]。現今的 L-Systems 在遊戲中用於生成樹木和其它的自然結構。且 L-Systems 已經擴展到城市模型的程序化生成[16]。這項擴充用於創造循環的道路網路，其中原始的 L-Systems 僅生成樹狀結構。該擴充允許在先前所生成的街道附近再生成一街道並與之相交，因此創建出返回到之前產生的結構。