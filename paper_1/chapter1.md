## 介紹

具有程序化生成內容的遊戲已經出現一段時間了。此類遊戲經典的例子是 *Rogue*，一個老式龍與地下城風格的 *ACSII* 地城冒險遊戲，每當玩家展開新遊戲時關卡就會重新生成。近年程序化產生內容的遊戲原始碼往往是無法取得的，因此難以判別其使用於自動化生成的演算法為何。而老遊戲的原始碼與它們的關卡生成策略在網路上被良好地記錄著。這些遊戲典型的關卡生成方法可以被分為暴力亂數演算法，是為了此類遊戲結構而量身打造的方法。一個生成策略是生成格狀的地圖並代表其充滿岩石，並從地圖起點開始”鑽"出隧道和房間。複數的路徑可以由之前打造的房間分別朝新方向鑽出。接著便在該地城內放置生物、陷阱與寶藏。另一個策略採用將地城劃分為大區塊，接著在部分區塊中生成房間、最後將這些房間以迴廊連結起來 [2]。如要生產代表荒野區域的遊戲空間，則使用**細胞自動機 (cellular automata)** 創造富有生機的結構。

雖然這些演算法的成效皆已在 roguelike 遊戲的關卡中被證實，但這類演算法生成出來的遊戲類型是非常少的。在 roguelike 遊戲玩法中，角色建設是一種典型的元素。此類型的遊戲玩法機械式地闡述紙筆桌上型角色扮演遊戲，解決大部分用以提升角色所需的收集的經驗點數、魔法裝備等繁複過程。就如遊戲設計師 Ernest Adams 在「來自地城的一封信」所諷刺地，此處在遊戲機制背後似乎缺乏了動機，導致用來描述角色成長的手法就如同 Mythical Quest 那微弱的回饋顯得不足 [4]。此類型的遊戲玩法，雖然形成自己的利基，但非常適合隨機生成地城的佈局，並且不需要與關卡設計相同的質量，例如，動作冒險遊戲中 *Zelda* 系列主設計師宮本茂在採訪中提到，角色開發僅作為遊戲的一小部分 [5]。就如同隨機遇敵表是一個評價良好的工具並可以產生特定風格，但並非所有龍與地下城的角色扮演都可行 [6]。

這有點類似 Kate Compton 與 Michael Mateas 所點出的，平台動作遊戲的關卡生成要難得多，此類遊戲的關卡設計是最關鍵的一部份 [7]。動作冒險同樣也依賴能讓玩家在探索、心流體驗與故事性中感到愉快的關卡設計。這些原則便使得我們難以用 roguelike 遊戲中常見的演算法來解決關卡生成問題。這些演算法不能表達這些原則，因為比起地城個別房間、通道的觀點，通常更注重更大規模的操作。為了產生符合上述原則的關卡，我們必須改變我們的做法，基於這些原則的層次進行操作。而這方法，正是使用**生成語法 (Generative grammars)**。

然而，即便使用了生成語法，生成一個好的關卡仍非常困難。關卡往往讓我們有隨機感，使得整體欠缺一個結構。尋找單一生成語法用以擊敗所有難題是不可行的。良好的關卡設計，必非單一、而是有兩種結構；一個關卡總是存在著任務與空間。本篇論文建議，最好分開來使用生成語法生成適合各個結構的任務和空間。如此論文最終節所述，文中描述的方法將會先產生任務後再生成空間，並使任務分配至各空間中。
