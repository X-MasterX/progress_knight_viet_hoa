var milestoneData = {}

const milestoneBaseData = {
    "Magic Eye": { name: "Magic Eye", displayName: "Mắt Phép Thuật", expense: 5000, tier: 1, description: "Tự động đạt cấp tối đa ở tuổi 65" },
    "Almighty Eye": { name: "Almighty Eye", displayName: "Mắt Toàn Năng", expense: 15000, tier: 2, description: "Tự động đạt cấp tối đa" },
    "Deal with the Devil": { name: "Deal with the Devil", displayName: "Giao Kèo Với Ác Quỷ", expense: 30000, tier: 3, description: "Tự động nhận một lượng nhỏ Ác Quỷ" },
    "Transcendent Master": { name: "Transcendent Master", displayName: "Bậc Thầy Siêu Việt", expense: 50000, tier: 4, description: "Nhận Tinh Hoa" },
    "Eternal Time": { name: "Eternal Time", displayName: "Thời Gian Vĩnh Hằng", expense: 75000, tier: 5, description: "x2 Gia Tốc Thời Gian" },
    "Hell Portal": { name: "Hell Portal", displayName: "Cổng Địa Ngục", expense: 120000, tier: 6, description: "Tự động nhận một lượng khổng lồ Ác Quỷ" },
    "Inferno": { name: "Inferno", displayName: "Hỏa Ngục", expense: 170000, tier: 7, description: "x5 Tăng Cường Ác Quỷ" },
    "God's Blessings": { name: "God's Blessings", displayName: "Phước Lành Của Thần", expense: 250000, tier: 8, description: "x10M Hạnh Phúc, giữ lại Đặc Quyền Độc Ác khi chơi lại" },
    "Faint Hope": { name: "Faint Hope", displayName: "Tia Hy Vọng Mỏng Manh", expense: 400000, tier: 9, description: "Nhận Tinh Hoa (tăng theo thời gian, bị ảnh hưởng bởi gia tốc thời gian)" },
    "New Beginning": { name: "New Beginning", displayName: "Khởi Đầu Mới", expense: 5000000, tier: 10, description: "Anh Hùng Vĩ Đại, Kỹ năng và vật phẩm được mở khóa" },

    "Rise of Great Heroes": { name: "Rise of Great Heroes", displayName: "Sự Trỗi Dậy Của Các Anh Hùng Vĩ Đại", expense: 10000000, tier: 11, description: "Nhận Tinh Hoa + x10000 XP Anh Hùng Vĩ Đại & Kỹ Năng" },
    "Lazy Heroes": { name: "Lazy Heroes", displayName: "Những Anh Hùng Lười Biếng", expense: 20000000, tier: 12, description: "XP Anh Hùng Vĩ Đại & Kỹ Năng", effect: 1e12 },
    "Dirty Heroes": { name: "Dirty Heroes", displayName: "Những Anh Hùng Bẩn Thỉu", expense: 30000000, tier: 13, description: "XP Anh Hùng Vĩ Đại & Kỹ Năng", effect: 1e15 },
    "Angry Heroes": { name: "Angry Heroes", displayName: "Những Anh Hùng Tức Giận", expense: 50000000, tier: 14, description: "XP Anh Hùng Vĩ Đại & Kỹ Năng, Tia Hy Vọng Mỏng Manh nhanh hơn 10 lần", effect: 1e15 },
    "Tired Heroes": { name: "Tired Heroes", displayName: "Những Anh Hùng Mệt Mỏi", expense: 100000000, tier: 15, description: "XP Anh Hùng Vĩ Đại & Kỹ Năng", effect: 1e15 },
    "Scared Heroes": { name: "Scared Heroes", displayName: "Những Anh Hùng Sợ Hãi", expense: 150000000, tier: 16, description: "XP Anh Hùng Vĩ Đại & Kỹ Năng, Đặc Quyền Độc Ác mới", effect: 1e15 },
    "Good Heroes": { name: "Good Heroes", displayName: "Những Anh Hùng Tốt Bụng", expense: 200000000, tier: 17, description: "XP Anh Hùng Vĩ Đại & Kỹ Năng", effect: 1e15 },
    "Funny Heroes": { name: "Funny Heroes", displayName: "Những Anh Hùng Vui Tính", expense: 300000000, tier: 18, description: "XP Anh Hùng Vĩ Đại & Kỹ Năng", effect: 1e25 },
    "Beautiful Heroes": { name: "Beautiful Heroes", displayName: "Những Anh Hùng Xinh Đẹp", expense: 400000000, tier: 19, description: "XP Anh Hùng Vĩ Đại & Kỹ Năng", effect: 1e50 },
    "Awesome Heroes": { name: "Awesome Heroes", displayName: "Những Anh Hùng Tuyệt Vời", expense: 500000000, tier: 20, description: "XP Anh Hùng Vĩ Đại & Kỹ Năng", effect: 1e10 },
    "Furious Heroes": { name: "Furious Heroes", displayName: "Những Anh Hùng Điên Cuồng", expense: 750000000, tier: 21, description: "XP Anh Hùng Vĩ Đại & Kỹ Năng", effect: 1e18 },
    "Superb Heroes": { name: "Superb Heroes", displayName: "Những Anh Hùng Xuất Sắc", expense: 10000000000, tier: 22, description: "XP Anh Hùng Vĩ Đại & Kỹ Năng", effect: 1e3 },
    "A new beginning": { name: "A new beginning", displayName: "Một khởi đầu mới", expense: 5e10, tier: 23, description: "Mở khóa Vật Chất Tối" },

    "Mind Control": { name: "Mind Control", displayName: "Kiểm Soát Tâm Trí", expense: 1e13, tier: 24, description: "Làm cho Cổng Địa Ngục thậm chí còn mạnh hơn" },
    "Galactic Emperor": { name: "Galactic Emperor", displayName: "Hoàng Đế Ngân Hà", expense: 1e15, tier: 25, description: "Tự động nhận một lượng nhỏ Tinh Hoa" },
    "Dark Matter Harvester": { name: "Dark Matter Harvester", displayName: "Máy Thu Hoạch Vật Chất Tối", expense: 1e17, tier: 26, description: "Nhân 10 lần Vật Chất Tối nhận được" },
    "A Dark Era": { name: "A Dark Era", displayName: "Kỷ Nguyên Tăm Tối", expense: 1e20, tier: 27, description: "Mở khóa Kỹ Năng Vật Chất Tối" },
    "Dark Orbiter": { name: "Dark Orbiter", displayName: "Quỹ Đạo Tối", expense: 1e22, tier: 28, description: "Nhân 1e10 lần Cầu Tối nhận được, luôn giữ lại 4 Đặc Quyền Độc Ác" },
    "Dark Matter Mining": { name: "Dark Matter Mining", expense: 1e25, tier: 29, description: "Multiply Dark Matter gain by 3x" },
    "The new gold": { name: "The new gold", expense: 1e30, tier: 30, description: "Multiply Essence gain by 1000x" },
    "The Devil inside you": { name: "The Devil inside you", expense: 1e35, tier: 31, description: "Multiply Evil gain by 1e15x" },
    "Strange Magic": { name: "Strange Magic", expense: 1e38, tier: 32, description: "Multiply Darkness xp gain by 1e50x" },
    "Speed speed speed": { name: "Speed speed speed", expense: 1e40, tier: 33, description: "Multiply Time Warping and Lifespan by 1000x. Heavily boosts Faint Hope" },
    "Life is valueable": { name: "Life is valueable", expense: 1e47, tier: 34, description: "Multiply your lifespan by 1e5x. New challenge unlocked. Dark Matter boosts essence gain." },
    "Dark Matter Millionaire": { name: "Dark Matter Millionaire", displayName: "<span style=\"color: #D5C010\">Triệu phú Vật Chất Tối</span>", expense: 1e55, tier: 35, description: "Nhân lượng Vật Chất Tối nhận được lên 500x" },
    "The new Dark Matter": { name: "The new Dark Matter", expense: 1e60, tier: 36, description: "Mở khóa Đa Vũ Trụ" },

    "Strong Hope": { name: "Strong Hope", expense: 1e70, tier: 37, description: "Faint Hope does not reset on transcend or collapse" },

    "Ruler of the Metaverse": { name: "Ruler of the Metaverse", expense: 1e90, tier: 38, description: "Unlocks Metaverse Perks, Metaverse Guards Job Category" },
    "A New Hope": { name: "A New Hope", expense: 1e95, tier: 39, description: "Faint Hope always at maximum" },
    "Time is a flat circle": { name: "Time is a flat circle", expense: 1e100, tier: 40, description: "Multiply Time Warping by 1000x, Multiply all xp gain by 1e50x" },
    "The End is near": { name: "The End is near", expense: 1e200, tier: 50, description: "Unspent Multiverse Perk Points buffs Dark Matter" },
    "The End": { name: "The End", expense: 1e300, tier: 99, description: "Congratulations! You have beaten the game!" },
}

const milestoneCategories = {
    "Essence Milestones": ["Magic Eye", "Almighty Eye", "Deal with the Devil", "Transcendent Master", "Eternal Time", "Hell Portal", "Inferno", "God's Blessings", "Faint Hope"],
    "Heroic Milestones": ["New Beginning", "Rise of Great Heroes", "Lazy Heroes", "Dirty Heroes", "Angry Heroes", "Tired Heroes", "Scared Heroes", "Good Heroes", "Funny Heroes", "Beautiful Heroes", "Awesome Heroes", "Furious Heroes", "Superb Heroes", "A new beginning"],
    "Dark Milestones": ["Mind Control", "Galactic Emperor", "Dark Matter Harvester", "A Dark Era", "Dark Orbiter", "Dark Matter Mining", "The new gold", "The Devil inside you", "Strange Magic", "Speed speed speed", "Life is valueable", "Dark Matter Millionaire", "The new Dark Matter"],
    "Metaverse Milestones": ["Strong Hope", "Ruler of the Metaverse", "A New Hope", "Time is a flat circle", "The End is near", "The End"],
}


function createMilestoneRequirements() {
    for (const key in milestoneBaseData) {
        const milestone = milestoneData[key]
        gameData.requirements[milestone.name] = new EssenceRequirement([getQuerySelector(milestone.name)],
            [{ requirement: milestone.expense }])
    }
}

function isNextMilestoneInReach() {
    const totalEssence = gameData.essence + getEssenceGain()

    for (const key in milestoneData) {
        const requirementObject = gameData.requirements[key]

        if (requirementObject instanceof EssenceRequirement) {
            if (!requirementObject.isCompleted()) {
                if (totalEssence >= requirementObject.requirements[0].requirement)
                    return true
            }
        }
    }
    return false
}