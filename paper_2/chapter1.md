## 1. 介紹 (Introduction)

大多數的關卡設計手冊，相當落實地描述設計過程。它們為讀者提供一些理論工具來描述關卡，這些工具通常快速聚焦於應用程式中的任務。雖然許多使用流程圖 [15, 5]、問題分層 [7, 1] 和關卡布局 [5, 1, 16] 這些形式，來表達抽象的描述，但這些都沒有被開發成標準工具，讓設計師用合適的抽象方式，來思考或傳達他們的研究。這些的描述和理論，在許多方面彼此矛盾。而這些都沒有提出一個清楚且簡潔的理論，來實際說明什麼是關卡，以及關卡設計的質量是來自哪裡。

在本文中，我提出將關卡設計視為一系列的**模型轉換 (model transformations)** 的議題：關卡設計師產生一系列不同的模型，慢慢地逼近完整的關卡。即使大多數的關卡設計師不認為自己的產物是模型，我還是認為他們的產物大多是：關卡佈局的初稿，或一個只專注於特定方面的分鏡。這些模型互相有關：第一個模型將以某些方式影響，甚至主宰第二個模型的結構。討論的目標有兩個：它可以作為一種讓設計關卡（部份的）自動化的策略，也使設計過程形式化；**模型轉換 (model transformations)** 允許設計師以結構化或抽象化的方式，去推斷關卡設計。

模型轉換是從**模型驅動工程 (model driven engineering)** 的作法中，或計算機科學中的**模型驅動架構 (model driven architecture)** 所取得的概念。模型驅動工程將創建軟體，描述為一系列模型轉換的過程，例如，一個商業的模型轉換成軟體架構，而該軟體架構又可以轉換成軟體代碼。模型驅動工程是一種被設計來應對複雜性如企業級軟體的方法。它很大的程度上取決於形式化的概念框架，通過不同的模型表示，可以用於設計系統和系統架構之間的連結。它也在軟體自動生成中，擔任很重要的角色。其中一個主要原因是，它讓工程師減少了許多繁瑣、手動的工作，並提升程式設計的工作到更高層次的抽象概念，最高層次的抽象概念是由程式設計師的創造力和聰明才智。通過模型驅動工程，可以提高軟體生產的質量和效率 [4]。模型驅動工程可以在許多不同的模型上作業，其中一些領域是特定的，而其他則是通用的。非常強烈推薦使用 **UML** 作為標準建模語言，進而不受平台和工具影響 [17]。

這不是第一次將模型驅動方法用於遊戲開發。在一短篇論文— Emanuel Montero Reyno and Jos´e ´A Cars´ı Cubel [13] 中，探討了標準統一建模語言（UML）之技術和工具的使用，也探討了遊戲原型大部分自動化的創建。他們認為 UML 的方法比起遊戲設計師，更適合軟體工程師。同一作者在後續的論文中，擬定了一個針對遊戲規範的**平台獨立模型 (Platform-Independent Model)** 語言 [14]。儘管他們將遊戲結構圖和規則集合圖添加到 UML 所提供的模型集，以便處理遊戲中較細節的領域，但這種建模語言仍重度仰賴 UML 的使用。他們的方法和這裡所採用的方法，主要區別是，他們的方法僅只於遊戲的自動生成和建立原型，然而本篇則使用模型轉換去形式化設計過程本身。因此，我所使用的模型並非基於 UML，而是更接近設計師常使用的模型；同時是更接近設計領域的模型，而非軟體工程的模型。
