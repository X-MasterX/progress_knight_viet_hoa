const tooltips = {

// Common work
"Beggar":"Ăn mày - Vật lộn ngày đêm để kiếm vài đồng xu. Cảm giác như bạn đang ở bờ vực của cái chết mỗi ngày.",
"Farmer":"Nông dân - Cày ruộng và trồng trọt. Không nhiều nhưng là công việc lương thiện.",
"Fisherman":"Ngư dân - Câu cá và bán chúng để kiếm một ít tiền. Công việc thư giãn nhưng thu nhập vẫn thấp.",
"Miner":"Thợ mỏ - Khám phá các hang động nguy hiểm và khai thác quặng quý. Tiền công khá ít so với rủi ro liên quan.",
"Blacksmith":"Thợ rèn - Nấu chảy quặng và rèn vũ khí cho quân đội. Một công việc đáng kính và thu nhập ổn định.",
"Merchant":"Thương nhân - Đi từ thị trấn này sang thị trấn khác, buôn bán hàng hóa. Công việc này trả lương khá tốt và ít lao động chân tay hơn.",

// Military
"Squire":"Giáp sĩ - Mang khiên và kiếm của hiệp sĩ của bạn trên chiến trường. Tiền công rất ít nhưng kinh nghiệm làm việc rất quý giá.",
"Footman":"Lính bộ binh - Hy sinh mạng sống để chiến đấu với quân địch. Một công việc dũng cảm, đáng kính nhưng bạn vẫn vô giá trị trong tổng thể.",
"Veteran footman":"Lính bộ binh kỳ cựu - Có kinh nghiệm và hữu ích hơn lính bộ binh bình thường, tiêu diệt quân địch trong trận chiến với sức mạnh của bạn. Tiền công không tệ.",
"Centenary":"Đội trưởng - Bằng cách chứng minh kỹ năng bắn cung của bạn, bạn được bổ nhiệm dẫn dắt một nhóm nhỏ cung thủ để phục kích kẻ thù từ xa.",
"Knight":"Hiệp sĩ - Chém và đâm xuyên qua quân địch một cách dễ dàng, trong khi được bọc thép từ đầu đến chân. Một công việc trả lương khá và rất đáng kính.",
"Veteran Knight":"Hiệp sĩ kỳ cựu - Sử dụng khả năng chiến đấu vô song của bạn, tiêu diệt kẻ thù một cách dễ dàng. Hầu hết lính bộ binh trong quân đội sẽ không bao giờ có thể đạt được công việc trả lương tốt như thế này.",
"Holy Knight":"Hiệp sĩ thánh - Tiêu diệt các đội quân địch trong một lần với kỹ năng phi thường, trong khi cầm một thanh kiếm được phù phép. Một đơn vị đáng sợ trên chiến trường được trả lương rất cao.",
"Lieutenant General":"Trung tướng - Được các quốc gia sợ hãi, tiêu diệt toàn bộ quân đội trong nháy mắt. Khoảng mỗi thế kỷ, chỉ có một hiệp sĩ thánh xứng đáng nhận được danh hiệu cao quý như vậy.",

// The Arcane Association
"Student":"Học viên - Nghiên cứu lý thuyết về mana và thực hành các phép thuật cơ bản. Có một khoản tiền nhỏ để trang trải chi phí sinh hoạt; tuy nhiên, đây là giai đoạn cần thiết để trở thành pháp sư.",
"Apprentice Mage":"Pháp sư tập sự - Dưới sự giám sát của một pháp sư lành nghề, thực hiện các phép thuật cơ bản chống lại kẻ thù trong trận chiến. Tiền lương hào phóng sẽ được cung cấp để trang trải chi phí sinh hoạt.",
"Adept Mage":"Pháp sư thành thạo - Thay đổi cục diện trận chiến bằng cách sử dụng các phép thuật trung cấp và hướng dẫn các pháp sư tập sự khác. Tiền lương cho công việc này cực kỳ cao.",
"Master Wizard":"Pháp sư bậc thầy - Sử dụng các phép thuật cao cấp để tàn phá và tiêu diệt toàn bộ quân đoàn của kẻ thù. Chỉ một tỷ lệ nhỏ pháp sư xứng đáng đạt được vai trò này và được thưởng một mức lương cực kỳ cao.",
"Archmage":"Đại pháp sư - Được ban phước với tài năng vô song, thực hiện những kỳ tích không thể tin được với phép thuật theo ý muốn. Người ta nói rằng một đại pháp sư có đủ sức mạnh hủy diệt để xóa sổ một đế chế khỏi bản đồ.",
"Chronomancer":"Pháp sư thời gian - Chuyên về việc khai thác năng lượng thời gian để thay đổi dòng chảy của thời gian với những tiên đoán siêu nhiên và chuyên môn khác thường.",
"Chairman":"Chủ tịch - Dành cả ngày để quản lý Hiệp hội Pháp thuật và nghiên cứu các khái niệm về sự bất tử thực sự. Chủ tịch nhận được một khoản tiền lương khổng lồ hàng ngày.",
"Imperator":"Đế vương - Bạn sở hữu sức mạnh vô hạn, khiến bạn không thể bị ngăn cản. Bằng cách cai trị bằng bàn tay sắt, mọi người trong Hiệp hội Pháp thuật phải tuân theo mệnh lệnh của bạn.",

// The Void
"Corrupted":"Bị tha hóa - Bị tha hóa bởi Hư Không, bạn đang dần trở thành một nô lệ không có ý chí tự do, chỉ để phục vụ Hư Không suốt đời... Bạn có thể chống lại nó, hay sẽ bị nó nuốt chửng mãi mãi?",
"Void Slave":"Nô lệ Hư Không - Mỗi ngày, bạn đang dần dần bị Hư Không chiếm lấy. Bạn có thể giữ được nhân tính của mình lâu hơn một chút, hay sẽ để Hư Không nuốt chửng bạn?",
"Void Fiend":"Quái vật Hư Không - Bạn trở thành một sinh vật tò mò nhưng thối rữa, hút sinh lực từ mọi thứ xung quanh.",
"Abyss Anomaly":"Dị thường Vực thẳm - Gào thét vào sự tồn tại, bạn trở thành một hiện thân của sự hư vô không thể biết được nằm ngoài.",
"Void Wraith":"Hồn ma Hư Không - Linh hồn bị nguyền rủa... một cái bóng của bản thân trước đây, lơ lửng giữa các cõi và bị Hư Không nuốt chửng... Bạn có thể tìm thấy sự bình yên không?",
"Void Reaver":"Kẻ tàn phá Hư Không - Có rất ít người có thể đi trên con đường giữa các thế giới, những sức mạnh này mang lại cho bạn khả năng tạo ra các trường năng lượng hư không nuốt chửng tất cả sinh vật sống.",
"Void Lord":"Chúa tể Hư Không - Bạn đã nhìn vào trái tim đen tối của Hư Không đủ lâu để trở thành một trong những sinh vật mạnh mẽ và đáng sợ nhất. Tất cả các sinh vật hư không thấp hơn đều phải tuân theo lệnh của bạn.",
"Abyss God":"Thần Vực thẳm - Người tạo ra Hư Không, một bức tranh rộng lớn của bóng tối và hư vô, trong đó khái niệm về sự tồn tại của nó thách thức mọi logic. Không gì có thể thoát khỏi bạn.",

// Galactic Council
"Eternal Wanderer":"Kẻ lang thang vĩnh cửu - Với sức mạnh được ban cho bởi một thực thể không rõ, bạn lang thang khắp nơi, thăm những nơi được tôn kính và sợ hãi để tìm kiếm câu trả lời.",
"Nova":"Nova - Thực thể cực kỳ mạnh mẽ với sức mạnh tâm linh khổng lồ và khả năng sắp xếp lại cấu trúc phân tử của vật chất và năng lượng, thậm chí ở quy mô vũ trụ.",
"Sigma Proioxis":"Sigma Proioxis - Một thực thể vũ trụ gần như toàn năng, với khả năng điều khiển vật chất và năng lượng rộng lớn giúp bạn đẩy lùi ranh giới của chính Vũ trụ.",
"Acallaris":"Acallaris - Thực thể nguyên thủy tồn tại trước cả vũ trụ, tham gia vào việc tạo ra sự sống và mạnh mẽ vượt quá sự hiểu biết của người phàm, tồn tại như những huyền thoại đối với các loài cổ xưa nhất trong vũ trụ.",
"One Above All":"Đấng tối cao - Người tạo ra mọi thứ.",

// Metaverse Guards
"Snow Crash":"Snow Crash, 1992",
"Player One":"Ready Player One, 2011",
"Lost in the dark":"Lạc trong bóng tối - Cả hai đều biết rằng họ chỉ có thể tiến về phía trước khi ở bên nhau. Họ thề rằng sẽ luôn ở bên nhau, kiếm được nhiều tiền và chuyển đến một nơi tốt hơn nơi họ sẽ rất hạnh phúc.",
"Omega":"Omega - ω",

// Fundamentals
"Concentration":"Tập trung - Cải thiện tốc độ học tập của bạn thông qua việc thực hành các hoạt động tập trung cao độ.",
"Productivity":"Năng suất - Học cách trì hoãn ít hơn trong công việc và nhận được nhiều kinh nghiệm làm việc hơn mỗi ngày.",
"Bargaining":"Mặc cả - Học các mẹo thương mại và kỹ năng thuyết phục để giảm bất kỳ loại chi phí nào.",
"Meditation":"Thiền định - Làm đầy tâm trí bạn với sự bình yên và tĩnh lặng để khai thác hạnh phúc lớn hơn từ bên trong.",

// Combat
"Strength":"Sức mạnh - Rèn luyện cơ thể và sức mạnh thông qua huấn luyện khắc nghiệt. Những người mạnh hơn được trả lương cao hơn trong quân đội.",
"Battle Tactics":"Chiến thuật chiến đấu - Tạo và sửa đổi các chiến lược chiến đấu, cải thiện kinh nghiệm thu được trong quân đội.",
"Muscle Memory":"Trí nhớ cơ bắp - Tăng cường các nơron thông qua thói quen và sự lặp lại, cải thiện sự phát triển sức mạnh trên toàn cơ thể.",

// Magic
"Mana Control":"Kiểm soát mana - Tăng cường các kênh mana trong cơ thể bạn, giúp bạn trở thành một người sử dụng phép thuật mạnh mẽ hơn.",
"Life Essence":"Tinh chất sự sống - Kéo dài tuổi thọ của bạn thông qua phép thuật. Tuy nhiên, đây có thực sự là sự bất tử mà bạn đã tìm kiếm không...?",
"Time Warping":"Bẻ cong thời gian - Bẻ cong không gian và thời gian thông qua các kỹ thuật cấm, tăng tốc quá trình học tập của bạn.",
"Astral Body":"Thể tinh tú - Kéo dài tuổi thọ của bạn vượt quá sự hiểu biết bằng cách khai thác năng lượng tinh tú.",
"Temporal Dimension":"Chiều không gian thời gian - Tạo ra chiều không gian riêng của bạn nơi hàng thế kỷ trôi qua chỉ trong vài giây.",
"All Seeing Eye":"Con mắt toàn tri - Là cấp bậc cao nhất của T.A.A, tất cả các quỹ đều trực tiếp thuộc về bạn.",
"Brainwashing":"Tẩy não - Một kỹ thuật được thiết kế để thao túng suy nghĩ và hành động của con người chống lại mong muốn của họ.",

// Dark Magic - Evil Required
"Dark Influence":"Ảnh hưởng hắc ám - Bao quanh bạn với sức mạnh đáng gờm được ban cho bởi cái ác, cho phép bạn dễ dàng tiếp thu và hấp thụ bất kỳ công việc hoặc kỹ năng nào.",
"Evil Control":"Kiểm soát cái ác - Thuần hóa cái ác đang bùng phát và phát triển trong bạn, cải thiện sự thu nhận cái ác giữa các lần tái sinh.",
"Intimidation":"Đe dọa - Học cách phát ra một hào quang ma quỷ gây sợ hãi tột độ cho các thương nhân khác, buộc họ phải giảm giá mạnh cho bạn.",
"Demon Training":"Huấn luyện quỷ - Một cơ thể con người bình thường quá yếu đuối để chịu đựng cái ác. Huấn luyện với các phương pháp cấm để dần dần biến thành một con quỷ, có khả năng hấp thụ kiến thức nhanh chóng.",
"Blood Meditation":"Thiền máu - Phát triển và nuôi dưỡng cái ác trong bạn thông qua sự hy sinh của các sinh vật sống khác, tăng đáng kể sự thu nhận cái ác.",
"Demon's Wealth":"Sự giàu có của quỷ - Thông qua phép thuật hắc ám, nhân lên vật chất thô của những đồng xu bạn nhận được từ công việc của mình.",
"Dark Knowledge":"Kiến thức hắc ám - Được niêm phong trong một thời gian rất dài, bạn sử dụng những văn bản cấm này cho lợi ích cá nhân của mình.",
"Void Influence":"Ảnh hưởng hư không - Khai thác sức mạnh của Hư Không kết hợp với cái ác mang lại cho bạn tiềm năng vô hạn.",
"Time Loop":"Vòng lặp thời gian - Sự thành thạo đạt được khi 'nói thời gian' trở thành 'nói thời gian phải làm gì'.",
"Evil Incarnate":"Hiện thân của cái ác - Bạn đã trở thành chính thứ mà bạn thề sẽ tiêu diệt.",

// Void Manipulation
"Absolute Wish":"Điều ước tuyệt đối - Sức mạnh để thực hiện bất kỳ và tất cả các điều ước mà không có bất kỳ giới hạn nào.",
"Void Amplification":"Khuếch đại Hư Không - Bạn đầu hàng Hư Không, khiến nó dễ dàng kiểm soát bạn hơn.",
"Mind Release":"Giải phóng tâm trí - Trong trạng thái như bị thôi miên, bạn cảm thấy Hư Không khuếch đại suy nghĩ, nhận thức, ký ức, cảm xúc và tính cách của bạn.",
"Ceaseless Abyss":"Vực thẳm không ngừng - Sự tra tấn không bao giờ kết thúc, bạn thề sẽ phục vụ Hư Không cho đến hết đời.",
"Void Symbiosis":"Cộng sinh Hư Không - Một mối quan hệ cộng sinh giúp bạn trở thành một với Hư Không.",
"Void Embodiment":"Hiện thân của Hư Không - Nếu bạn nhìn lâu vào vực thẳm, vực thẳm cũng sẽ nhìn vào bạn.",
"Abyss Manipulation":"Thao túng Vực thẳm - Cho phép bạn định hình thực tại của riêng mình trong chính Hư Không.",

// Celestial Powers
"Cosmic Longevity":"Trường thọ vũ trụ - Bạn đã thấy tất cả, từ lúc bắt đầu đến khi kết thúc.",
"Cosmic Recollection":"Hồi tưởng vũ trụ - Có khả năng tồn tại trong nhiều dòng thời gian song song và thao túng các bản thể song song của bạn, ảnh hưởng đến cuộc sống của họ theo ý bạn.",
"Essence Collector":"Người thu thập tinh chất - Khai thác tiềm năng vô hạn của năng lượng đa vũ trụ và thu thập tài nguyên của nó.",
"Galactic Command":"Chỉ huy thiên hà - Quyền lực tuyệt đối làm tha hóa tuyệt đối.",

// Almightiness
"Yin Yang":"Âm Dương - Sinh ra từ hỗn loạn khi vũ trụ mới được tạo ra, được tin là tồn tại trong sự hài hòa, cân bằng giữa cái ác và cái thiện.",
"Parallel Universe":"Vũ trụ song song - Mặt phẳng tồn tại tự chứa, cùng tồn tại với chính mình, giúp bạn khôi phục các mảnh vỡ của sức mạnh đã quên.",
"Higher Dimensions":"Chiều không gian cao hơn - Bằng cách sở hữu sức mạnh để thay đổi một phần các quy luật vật lý và vượt qua các không gian chiều thấp hơn, sự tồn tại của bạn trở nên bất tận.",
"Epiphany":"Giác ngộ - Bạn trở thành một với tất cả.",

// Darkness
"Dark Prince":"Hoàng tử bóng tối - Bạn có thể tăng trí thông minh của mình với tốc độ đáng báo động nhờ vào việc truy cập tất cả các thư viện trong vũ trụ.",
"Dark Ruler":"Chúa tể bóng tối - Cai trị vũ trụ cho phép bạn thu thập nhiều Vật chất tối hơn từ cấp dưới của mình.",
"Immortal Ruler":"Chúa tể bất tử - Bạn chỉ có một mục tiêu: cai trị vũ trụ này đến vô tận.",
"Dark Magician":"Pháp sư bóng tối - Bằng cách thực hiện phép thuật cấm trên cấp dưới của mình, bạn có thể rút hết từng giọt Tinh chất từ họ.",
"Universal Ruler":"Chúa tể vũ trụ - Không ai dám thách thức sự cai trị của bạn khi bạn cai trị bằng bàn tay sắt.",
"Blinded By Darkness":"Bị bóng tối che mờ - Bị bóng tối che mờ, bạn không còn kiểm soát được bản thân. Bạn bắt đầu phá hủy mọi thứ tồn tại để làm dịu bản thân.",

// Properties
"Homeless":"Vô gia cư - Ngủ trên những con đường bẩn thỉu, không thoải mái trong khi gần như chết cóng mỗi đêm. Không thể tồi tệ hơn thế này.",
"Tent":"Lều - Một tấm vải mỏng rách nát được dựng lên bởi vài cây gậy gỗ yếu ớt. Điều kiện sống tồi tệ nhưng ít nhất bạn có một mái che trên đầu.",
"Wooden Hut":"Túp lều gỗ - Những khúc gỗ tồi tàn và rơm bẩn được dán lại với phân ngựa. Chắc chắn hơn nhiều so với lều, tuy nhiên, mùi hôi không dễ chịu lắm.",
"Cottage":"Nhà tranh - Được cấu trúc bằng khung gỗ và mái tranh. Cung cấp điều kiện sống khá tốt với giá cả hợp lý.",
"House":"Nhà - Một tòa nhà được xây từ gạch đá và gỗ chắc chắn, có vài phòng. Mặc dù khá đắt đỏ, nhưng đây là một nơi ở thoải mái.",
"Large House":"Nhà lớn - Lớn hơn nhiều so với một ngôi nhà bình thường, có nhiều phòng hơn và nhiều tầng. Tòa nhà khá rộng rãi nhưng đi kèm với giá cả đắt đỏ.",
"Small Palace":"Cung điện nhỏ - Một cấu trúc rất giàu có và được xây dựng tỉ mỉ với các kim loại quý như bạc. Chi phí duy trì cực kỳ cao cho một lối sống xa hoa.",
"Grand Palace":"Cung điện lớn - Một nơi ở hoàn toàn bằng vàng và bạc. Cung cấp điều kiện sống xa hoa và thoải mái nhất có thể với một mức giá vô lý.",
"Town Ruler":"Người cai trị thị trấn - Bạn cai trị cộng đồng của riêng mình trong thị trấn nhỏ, sở hữu nhiều cơ sở.",
"City Ruler":"Người cai trị thành phố - Là quan chức cấp cao nhất, bạn quản lý và giám sát mọi thứ diễn ra. Mặc dù lương của bạn rất cao, nhưng chi phí cũng rất lớn.",
"Nation Ruler":"Người cai trị quốc gia - Bạn cai trị cả quốc gia. Mặc dù sự giàu có của bạn có thể bị tha hóa, nhưng mọi thứ bạn thấy đều thuộc về bạn.",
"Pocket Dimension":"Chiều không gian túi - Một chiều không gian chỉ dành cho bạn có thể được triệu hồi theo ý muốn. Những gì xảy ra ở đó sẽ ở lại đó.",
"Void Realm":"Vương quốc Hư Không - Không rõ làm thế nào hoặc khi nào vương quốc Hư Không xuất hiện, chứa các yếu tố không tồn tại bên ngoài mặt phẳng chiều của nó hiện đều thuộc về bạn.",
"Void Universe":"Vũ trụ Hư Không - Tồn tại trước vũ trụ của chúng ta, Hư Không có một không gian không giới hạn cho tài sản của bạn, nếu bạn sẵn sàng phục tùng nó.",
"Astral Realm":"Vương quốc Tinh tú - Bên dưới tính cách và cái tôi là nguồn gốc của nhân cách sâu sắc của chúng ta, con người của chúng ta. Đây là các giác quan tâm linh, tâm trí và cảm xúc sâu sắc của chúng ta, các biểu tượng và thực tại bên trong.",
"Galactic Throne":"Ngai vàng Thiên hà - Bạn ngồi trên ngai vàng của mình, giám sát sự tồn tại.",
"Spaceship":"Tàu vũ trụ - Ngôi nhà vũ trụ cá nhân của bạn, có thể du hành bất cứ đâu trong vũ trụ với tốc độ 99,99% tốc độ ánh sáng.",
"Planet":"Hành tinh - Một hành tinh với mục đích duy nhất là chứa bạn và gia đình bạn.",
"Ringworld":"Thế giới vòng - Một cấu trúc có khối lượng của sao Mộc và diện tích bề mặt gấp hàng triệu lần Trái Đất, có khả năng chứa hàng nghìn tỷ con người và các loài động vật khác bao gồm cả các loài ngoài hành tinh. Chi phí duy trì thực sự là thiên văn do việc giữ cho cấu trúc ổn định và khu vực bên trong có thể ở được, nhưng không gian sống rộng lớn rất đáng giá.",
"Stellar Neighborhood":"Khu vực sao - Một mạng lưới các ngôi sao và hệ sao được thuộc địa hóa hoàn toàn trải dài hàng chục năm ánh sáng sẵn sàng cho bạn khám phá và gọi là nhà.",
"Galaxy":"Thiên hà - Bạn cai trị thiên hà của riêng mình có kích thước bằng Dải Ngân hà, với hàng tỷ hành tinh được tổ chức thành hàng nghìn bang khác nhau dưới sự kiểm soát của bạn. Mặc dù quyền lực của bạn là thiên văn, nhưng trách nhiệm của bạn cũng vậy.",
"Supercluster":"Siêu cụm - Một cụm các nhóm thiên hà trải dài hàng trăm triệu năm ánh sáng và chứa hàng nghìn thiên hà dưới sự kiểm soát của bạn.",
"Galaxy Filament":"Sợi thiên hà - Một trong những cấu trúc lớn nhất được biết đến của vũ trụ, chứa hàng chục siêu cụm và hàng triệu thiên hà.",
"Observable Universe":"Vũ trụ quan sát được - Bạn đã làm được! Cuối cùng bạn cai trị toàn bộ vũ trụ... hay không?",
"Multiverse":"Đa vũ trụ - Vũ trụ quá nhỏ đối với bạn?!",
"Quantum World":"Thế giới lượng tử - Bạn cố gắng tìm ít nhất một nơi nào đó vẫn nằm ngoài tầm kiểm soát của bạn, nhưng tất cả đều vô ích.",
"Boötes Void":"Khoảng trống Boötes - Hư vô vĩ đại",

// Misc
"Book":"Sách - Một nơi để ghi lại tất cả suy nghĩ và khám phá của bạn, giúp bạn học hỏi nhanh hơn nhiều.",
"Dumbbells":"Tạ tay - Dụng cụ nặng được sử dụng trong các bài tập căng thẳng để tăng cường và tích lũy sức mạnh nhanh hơn trước.",
"Personal Squire":"Giáp sĩ cá nhân - Hỗ trợ bạn hoàn thành các hoạt động hàng ngày, giúp bạn có nhiều thời gian hơn để làm việc hiệu quả.",
"Steel Longsword":"Kiếm dài thép - Một lưỡi kiếm tốt dùng để tiêu diệt kẻ thù nhanh hơn trong chiến đấu và do đó thu được nhiều kinh nghiệm hơn.",
"Butler":"Quản gia - Giữ cho ngôi nhà của bạn luôn sạch sẽ và cũng chuẩn bị ba bữa ăn ngon mỗi ngày, giúp bạn có tâm trạng vui vẻ, không căng thẳng.",
"Sapphire Charm":"Bùa ngọc bích - Được gắn với một viên ngọc bích hiếm, bùa này kích hoạt nhiều kênh mana hơn trong cơ thể bạn, giúp bạn học phép thuật dễ dàng hơn nhiều.",
"Study Desk":"Bàn học - Một khu vực chuyên dụng cung cấp nhiều văn phòng phẩm và thiết bị tốt để nâng cao tiến độ nghiên cứu của bạn.",
"Library":"Thư viện - Lưu trữ một bộ sưu tập sách, mỗi cuốn chứa đựng lượng thông tin khổng lồ từ kỹ năng sống cơ bản đến các phép thuật phức tạp.",
"Observatory":"Đài quan sát - Được sử dụng để quan sát các sự kiện trên mặt đất, biển và thiên thể.",
"Mind's Eye":"Con mắt tâm trí - Cho phép bạn nhìn thấy ký ức, nhớ lại hình ảnh và thậm chí nhìn thấy những hình ảnh và ý tưởng mới.",
"Void Necklace":"Vòng cổ Hư Không - Giúp bạn định hình và thao túng vật chất hư không, thậm chí chuyển hóa và tái tạo nó thành bất cứ thứ gì bạn chọn.",
"Void Armor":"Giáp Hư Không - Tạo ra một lớp giáp bẩm sinh như một phần của cơ thể bạn, chống lại các cuộc tấn công, tổn thương hoặc đau đớn.",
"Void Blade":"Lưỡi kiếm Hư Không - Được rèn từ bụi hư không và vật chất tối, lưỡi kiếm này có thể cắt xuyên qua các rào cản chiều không gian. Đây là vũ khí được lựa chọn cho mọi Kẻ tàn phá Hư Không.",
"Void Orb":"Quả cầu Hư Không - Khi quả cầu chạm vào các thực thể không thuộc hư không, nó ngay lập tức phân rã chúng bằng cách khai thác sức mạnh từ vương quốc Hư Không.",
"Void Dust":"Bụi Hư Không - Phiên bản tinh khiết nhất của vật liệu hư không; một thìa cà phê của nó nặng bằng một hành tinh nhỏ.",
"Celestial Robe":"Áo choàng Thiên thể - Trang bị mạnh mẽ và thiết yếu nhất của bất kỳ Thiên thể nào. Hoạt động như một nguồn sức mạnh vô hạn.",
"Universe Fragment":"Mảnh vỡ Vũ trụ - Từ thời điểm vũ trụ được sinh ra. Có thể tạo ra nhiều vũ trụ nhỏ hơn.",
"Multiverse Fragment":"Mảnh vỡ Đa vũ trụ - Tồn tại từ rất lâu trước khi vũ trụ của chúng ta được tạo ra, vật thể kỳ lạ này không có hình dạng phát ra năng lượng vô hạn.",
"Stairway to heaven":"Cầu thang lên thiên đường - Một cầu thang dẫn đến chính các đấng tối cao.",
"Highway to hell":"Đường cao tốc đến địa ngục - Ác quỷ mời bạn đến cung điện kinh hoàng của hắn.",
"Tesseract":"Khối lập phương bốn chiều - Vật thể này đến từ một thế giới chiều cao hơn.",
"Desintegration":"Phân rã - Tại sao bạn cần nó?",
"Custom Galaxy":"Thiên hà tùy chỉnh - Bạn biết về chiều không gian túi, phải không?",
"Hypersphere":"Siêu cầu - Bạn có được sức mạnh vô hạn... à, bạn đã toàn năng rồi...",

// Essence Milestones
"Magic Eye":"Mắt phép thuật - Con mắt trong bùa hộ mệnh của bạn bắt đầu phát sáng.",
"Almighty Eye":"Mắt toàn năng - Con mắt trong bùa hộ mệnh của bạn sáng như một ngôi sao.",
"Deal with the Devil":"Thỏa thuận với quỷ - Bạn đã thực hiện một thỏa thuận với quỷ.",
"Transcendent Master":"Bậc thầy siêu việt - Bạn đã làm chủ sự siêu việt.",
"Eternal Time":"Thời gian vĩnh cửu - Thời gian còn quan trọng không?",
"Hell Portal":"Cổng địa ngục - Bạn đã mở một cánh cổng đến địa ngục.",
"Inferno":"Hỏa ngục - Bạn đang ở cấp độ cuối cùng của địa ngục. Tiếp theo là gì?",
"God's Blessings":"Phước lành của Chúa - Chúa phù hộ bạn!",
"Faint Hope":"Hy vọng mong manh - Có lẽ vẫn còn hy vọng?",
"New Beginning":"Khởi đầu mới - Thử nâng cấp Đấng tối cao lên cấp 2000",

// Heroic Milestones
"Rise of Great Heroes":"Sự trỗi dậy của các anh hùng vĩ đại - Mỗi công việc hoặc kỹ năng vĩ đại đang hoạt động sẽ tăng một chút lượng Tinh chất thu được.",
"Lazy Heroes":"Anh hùng lười biếng - Tổng hệ số nhân XP của anh hùng là 5e20",
"Dirty Heroes":"Anh hùng bẩn thỉu - Tổng hệ số nhân XP của anh hùng là 5e35",
"Angry Heroes":"Anh hùng tức giận - Tổng hệ số nhân XP của anh hùng là 5e50",
"Tired Heroes":"Anh hùng mệt mỏi - Tổng hệ số nhân XP của anh hùng là 5e65",
"Scared Heroes":"Anh hùng sợ hãi - Tổng hệ số nhân XP của anh hùng là 5e80",
"Good Heroes":"Anh hùng tốt - Tổng hệ số nhân XP của anh hùng là 5e95",
"Funny Heroes":"Anh hùng vui nhộn - Tổng hệ số nhân XP của anh hùng là 5e120",
"Beautiful Heroes":"Anh hùng xinh đẹp - Tổng hệ số nhân XP của anh hùng là 5e170",
"Awesome Heroes":"Anh hùng tuyệt vời - Tổng hệ số nhân XP của anh hùng là 5e180",
"Furious Heroes":"Anh hùng giận dữ - Tổng hệ số nhân XP của anh hùng là 5e198",
"Superb Heroes":"Anh hùng xuất sắc - Tổng hệ số nhân XP của anh hùng là 5e201",
"A new beginning":"Một khởi đầu mới - Mở khóa khả năng đặt lại để lấy Vật chất tối",

// Dark Milestones
"Mind Control":"Kiểm soát tâm trí - Kiểm soát quỷ bằng cách khiến hắn cho bạn nhiều cái ác hơn mỗi giây",
"Galactic Emperor":"Hoàng đế thiên hà - Chỉ huy Hội đồng Thiên hà cho bạn đặc quyền tự động thu thập Tinh chất từ các hành tinh lân cận",
"Dark Matter Harvester":"Máy thu hoạch Vật chất tối - Thu hoạch vũ trụ để chiết xuất nhiều Vật chất tối hơn từ nó.",
"A Dark Era":"Kỷ nguyên đen tối - Bắt đầu một kỷ nguyên mới của Vật chất tối.",
"Dark Orbiter":"Quỹ đạo đen tối - Sử dụng một số phép thuật, bạn có thể cải thiện đáng kể các máy phát Quả cầu đen tối của mình.",
"Dark Matter Mining":"Khai thác Vật chất tối - Khai thác một lượng lớn Vật chất tối từ mỗi hành tinh bạn ghé thăm.",
"The new gold":"Vàng mới - Tinh chất có thể trở thành vàng mới do sự chấp nhận rộng rãi.",
"The Devil inside you":"Quỷ bên trong bạn - Những thỏa thuận mờ ám với quỷ mang lại cho bạn một lượng lớn cái ác.",
"Strange Magic":"Phép thuật kỳ lạ - Một pháp sư kỳ lạ cung cấp cho bạn một vài phép thuật bí mật có thể hữu ích.",
"Life is valueable":"Cuộc sống quý giá - Thời gian có hạn... Ngay cả khi bạn là người cai trị vũ trụ.",
"Speed speed speed":"Tốc độ tốc độ tốc độ - Bạn có thể ảnh hưởng đến tốc độ của vũ trụ với lượng Vật chất tối khổng lồ của mình.",
"Dark Matter Millionaire":"Triệu phú Vật chất tối - Phép thuật bí mật này sẽ giúp bạn đạt được nhiệm vụ trở thành triệu phú Vật chất tối đầu tiên.",
"The new Dark Matter":"Vật chất tối mới - Bùa hộ mệnh của bạn xé toạc không gian và thời gian qua tất cả các đa vũ trụ. Chào mừng đến với Metaverse.",

"Strong Hope":"Hy vọng mạnh mẽ - Một buff Hy vọng mong manh khác?!",
"Ruler of the Metaverse":"Người cai trị Metaverse - Bây giờ bạn đang suy nghĩ với các cổng",
"A New Hope":"Hy vọng mới - Không còn những điều vô nghĩa về Hy vọng mong manh nữa!!!",
"Time is a flat circle":"Thời gian là một vòng tròn phẳng - Đây là một thế giới nơi không có gì được giải quyết. Ai đó đã từng nói với tôi, thời gian là một vòng tròn phẳng. Mọi thứ chúng ta đã từng làm hoặc sẽ làm, chúng ta sẽ làm đi làm lại nhiều lần.",
"The End is near":"Kết thúc đang đến gần - Chúng ta không cố gắng sống mãi mãi",
"The End":"Kết thúc - Luôn luôn có một kết thúc",
}