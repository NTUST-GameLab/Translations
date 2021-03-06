## 3. 突現與漸進 (Emergence and Progression)

一個有趣的挑戰出自於嘗試生成動作冒險遊戲的內容，這些遊戲通常結合**漸進型遊戲 (games of progression)** 與**突現型遊戲 (games of emergence)** 的元素。這些分類由 Jesper Juul 首次提出 [14]，是創造遊戲玩法的兩種選擇方案。在漸進型遊戲中，遊戲玩法通常出於精心設計的關卡，向玩家呈現一系列愈來愈困難的挑戰。製作這類型遊戲需要創造出許多專門的內容。程序化內容生成針對已經成功應用在漸進型遊戲結構的關卡設計（舉例來說有 *Diablo* 與 *Torchlight*）。動作冒險遊戲使用關卡設計來建構遊戲體驗。同時，動作冒險遊戲也倚賴突現型的遊戲玩法。對戰機制經常採用特殊能力與增益道具的組合，讓其更近似於突現型遊戲。在動作冒險遊戲中，玩家構築個人策略與戰術，以克服特定的障礙。動作冒險遊戲往往被設計成這類便於探索的機制類型。

突現型遊戲倚賴於以少量機制來生成大量的可能性。術語「突現」源於複雜科學，並研究複雜、動態系統，包括但不限於遊戲。該領域的結果表明，複雜系統的許多結構特徵在塑造突現中，扮演著重要的角色。Stephen Wolfram [26] 建議以簡單的規則來管理多個狀態機之間的交互作用，便可展現出令人驚訝的複雜行為。狀態機之間的連接數量以及狀態機的活動情形（它們多久改變狀態），是檢視其突現特性，不錯的指標。另一項研究中，Jochen Fromm [11] 將突現特性與系統內存在的**反饋循環 (feedback loops)** 相關連。以多個反饋循環來建構出更多的突現特性。

反饋循環與其遊戲設計間的關係，已被有經驗遊戲設計師給認可 [15, 20, 1]。在之前的著作中，著重在**經濟驅動 (economy driven)** 的遊戲（像是模擬、即時策略與桌上遊戲）的突現特性。我還得出下述結論，資源流動中的反饋循環是建構突現型遊戲的必備要素 [5, 7]。

為了成功地生成出動作冒險遊戲的機制，機制將由遊戲中的突現與漸進等特性，來適應至其結構性質。在這方面，鎖與鑰匙的機制發揮重要作用，因為鎖與鑰匙機制與漸進遊戲的結構息息相關，並且同時與遊戲的突現物理特性相互作用。

