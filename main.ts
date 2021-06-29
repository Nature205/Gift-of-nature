namespace SpriteKind {
    export const 旗子 = SpriteKind.create()
    export const 旗子1 = SpriteKind.create()
    export const 旗子2 = SpriteKind.create()
    export const 旗子3 = SpriteKind.create()
    export const 旗子4 = SpriteKind.create()
    export const 旗子5 = SpriteKind.create()
    export const 旗子6 = SpriteKind.create()
    export const 旗子7 = SpriteKind.create()
    export const play劍士 = SpriteKind.create()
    export const play射手 = SpriteKind.create()
    export const play魔法師 = SpriteKind.create()
    export const player槍手 = SpriteKind.create()
    export const player魔法師 = SpriteKind.create()
    export const player射手 = SpriteKind.create()
    export const player劍士 = SpriteKind.create()
    export const player箭頭 = SpriteKind.create()
    export const play槍手 = SpriteKind.create()
    export const 殭屍 = SpriteKind.create()
    export const 鬼怪 = SpriteKind.create()
    export const 蝙蝠 = SpriteKind.create()
    export const 能量1 = SpriteKind.create()
    export const 蟒蛇 = SpriteKind.create()
    export const 狼 = SpriteKind.create()
    export const 老虎 = SpriteKind.create()
    export const 劍士1 = SpriteKind.create()
    export const 劍士2 = SpriteKind.create()
    export const 劍士3 = SpriteKind.create()
    export const 劍士4 = SpriteKind.create()
    export const 劍士5 = SpriteKind.create()
    export const 蜘蛛 = SpriteKind.create()
    export const 螳螂 = SpriteKind.create()
    export const 蜜蜂 = SpriteKind.create()
    export const 食人花 = SpriteKind.create()
    export const 向日葵 = SpriteKind.create()
    export const 含羞草 = SpriteKind.create()
    export const 鯊魚 = SpriteKind.create()
    export const 魟魚 = SpriteKind.create()
    export const 水母 = SpriteKind.create()
    export const 龍 = SpriteKind.create()
    export const 劍士6 = SpriteKind.create()
    export const 能量2 = SpriteKind.create()
    export const 貝殼 = SpriteKind.create()
    export const 劍士7 = SpriteKind.create()
    export const 射手1 = SpriteKind.create()
    export const 射手2 = SpriteKind.create()
    export const 射手3 = SpriteKind.create()
    export const 射手4 = SpriteKind.create()
    export const 射手5 = SpriteKind.create()
    export const 射手6 = SpriteKind.create()
    export const 射手7 = SpriteKind.create()
    export const 能量3 = SpriteKind.create()
    export const 能量4 = SpriteKind.create()
    export const 魔法師1 = SpriteKind.create()
    export const 槍手1 = SpriteKind.create()
    export const 魔法師2 = SpriteKind.create()
    export const 槍手 = SpriteKind.create()
    export const 槍手2 = SpriteKind.create()
    export const 魔法師3 = SpriteKind.create()
    export const 槍手3 = SpriteKind.create()
    export const 魔法師4 = SpriteKind.create()
    export const 槍手4 = SpriteKind.create()
    export const 魔法師5 = SpriteKind.create()
    export const 槍手5 = SpriteKind.create()
    export const 魔法師6 = SpriteKind.create()
    export const 槍手6 = SpriteKind.create()
    export const 魔法師7 = SpriteKind.create()
    export const 槍手7 = SpriteKind.create()
    export const 金幣 = SpriteKind.create()
    export const 元寶 = SpriteKind.create()
    export const 寶箱 = SpriteKind.create()
    export const 生命 = SpriteKind.create()
    export const 金幣2 = SpriteKind.create()
    export const 元寶2 = SpriteKind.create()
    export const 寶箱2 = SpriteKind.create()
    export const 金幣3 = SpriteKind.create()
    export const 金幣4 = SpriteKind.create()
    export const 金幣5 = SpriteKind.create()
    export const 金幣6 = SpriteKind.create()
    export const 元寶3 = SpriteKind.create()
    export const 元寶4 = SpriteKind.create()
    export const 元寶5 = SpriteKind.create()
    export const 元寶6 = SpriteKind.create()
    export const 寶箱3 = SpriteKind.create()
    export const 生命2 = SpriteKind.create()
    export const 生命3 = SpriteKind.create()
    export const 生命4 = SpriteKind.create()
    export const 生命5 = SpriteKind.create()
}
namespace ConnectionKind {
    export const 旗子 = ConnectionKind.create()
}
namespace StatusBarKind {
    export const 殭屍 = StatusBarKind.create()
    export const 鬼怪 = StatusBarKind.create()
    export const 蝙蝠 = StatusBarKind.create()
    export const 蟒蛇 = StatusBarKind.create()
    export const 狼 = StatusBarKind.create()
    export const 老虎 = StatusBarKind.create()
    export const 蜘蛛 = StatusBarKind.create()
    export const 螳螂 = StatusBarKind.create()
    export const 蜜蜂 = StatusBarKind.create()
    export const 食人花 = StatusBarKind.create()
    export const 向日饋 = StatusBarKind.create()
    export const 向日葵 = StatusBarKind.create()
    export const 含羞草 = StatusBarKind.create()
    export const 鯊魚 = StatusBarKind.create()
    export const 魟魚 = StatusBarKind.create()
    export const 水母 = StatusBarKind.create()
    export const 龍 = StatusBarKind.create()
}
sprites.onOverlap(SpriteKind.劍士4, SpriteKind.元寶4, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.劍士1, SpriteKind.鬼怪, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.能量3, SpriteKind.蜜蜂, function (sprite, otherSprite) {
    sprite.destroy()
    蜜蜂的血量.value += -20
})
sprites.onOverlap(SpriteKind.play劍士, SpriteKind.水母, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    水母的血量.value += -100
})
sprites.onOverlap(SpriteKind.魔法師3, SpriteKind.蜘蛛, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.play魔法師, SpriteKind.螳螂, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    螳螂的血量.value += -30
})
sprites.onOverlap(SpriteKind.play劍士, SpriteKind.蜘蛛, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    蜘蛛的血量.value += -100
})
sprites.onOverlap(SpriteKind.劍士5, SpriteKind.生命5, function (sprite, otherSprite) {
    music.powerUp.play()
    otherSprite.destroy()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.能量4, SpriteKind.螳螂, function (sprite, otherSprite) {
    sprite.destroy()
    螳螂的血量.value += -20
})
sprites.onOverlap(SpriteKind.射手2, SpriteKind.生命2, function (sprite, otherSprite) {
    otherSprite.destroy()
    music.powerUp.play()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.槍手6, SpriteKind.寶箱3, function (sprite, otherSprite) {
    music.jumpUp.play()
    otherSprite.destroy()
    info.changeScoreBy(3)
})
sprites.onOverlap(SpriteKind.play劍士, SpriteKind.蝙蝠, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    蝙蝠的血量.value += -100
})
sprites.onOverlap(SpriteKind.能量3, SpriteKind.食人花, function (sprite, otherSprite) {
    sprite.destroy()
    食人花的血量.value += -20
})
sprites.onOverlap(SpriteKind.魔法師4, SpriteKind.旗子4, function (sprite, otherSprite) {
    tiles.setTilemap(tilemap`層級31`)
    魔法師.setStayInScreen(true)
    鯊魚的血量 = statusbars.create(20, 4, StatusBarKind.鯊魚)
    鯊魚的血量.setColor(8, 2)
    魟魚的血量 = statusbars.create(20, 4, StatusBarKind.魟魚)
    魟魚的血量.setColor(8, 2)
    水母的血量 = statusbars.create(20, 4, StatusBarKind.水母)
    水母的血量.setColor(8, 2)
    info.startCountdown(30)
    旗子.setPosition(630, 90)
    sprite.setPosition(0, 92)
    鯊魚 = sprites.create(img`
        ....................ffffff..............
        .................fffcccccf..............
        ................fccccccff...............
        ..........ffffffccccccf.................
        .......fffcccccccccccf..................
        .....ffcccccfccccccccff.................
        ....fccffccccfccfccccccff...............
        ...fccf2cccfccfccfcccccccff.............
        ..fcccccccffccfcccfccccccccff...........
        .fcccccccf1fccccccfccccccccccff.........
        fcccccfff3fccccccccccccccccccccf........
        .fffff133f1cccf1ccccccccccccccccf.ffffff
        ....fffff11ccccf11ffffffff1111cccfcccccf
        .....f11111fcccfff........ffff1ccccccff.
        ......ffffffcccf..............fccccff...
        ............fcccf.............fcccf.....
        .............ffcf.............fccf......
        ...............ff..............fcf......
        ...............................fcf......
        ................................ff......
        `, SpriteKind.鯊魚)
    animation.runImageAnimation(
    鯊魚,
    [img`
        ....................ffffff..............
        .................fffcccccf..............
        ................fccccccff...............
        ..........ffffffccccccf.................
        .......fffcccccccccccf..................
        .....ffcccccfccccccccff.................
        ....fccffccccfccfccccccff...............
        ...fccf2cccfccfccfcccccccff.............
        ..fcccccccffccfcccfccccccccff...........
        .fcccccccf1fccccccfccccccccccff.........
        fcccccfff3fccccccccccccccccccccf........
        .fffff133f1cccf1ccccccccccccccccf.ffffff
        ....fffff11ccccf11ffffffff1111cccfcccccf
        .....f11111fcccfff........ffff1ccccccff.
        ......ffffffcccf..............fccccff...
        ............fcccf.............fcccf.....
        .............ffcf.............fccf......
        ...............ff..............fcf......
        ...............................fcf......
        ................................ff......
        `,img`
        ....................ffffff..............
        .................fffcccccf..............
        ................fccccccff...............
        ....ffffffffffffccccccf.................
        ..ffcccccccccccccccccf..................
        .ffcccccffccfccccccccff.................
        .1ffcccf2ccccfccfccccccff...............
        ..1ffccccccfccfccfcccccccff.............
        ..1.1fffcccfccfcccfccccccccf............
        ......ccfccfccccccfcccccccccff..........
        ...1.1.ffcccccccccccccccccccccf.fffffff.
        ..11ffffccccccf1cccccccccccccccfccccccf.
        ..fff111111ccccf11ffffffff111cccccccff..
        ..f111ffffffcccfff........fff1ccccff....
        ...ffff....fcccf.............fcccf......
        ............fcccf............fccf.......
        .............ffcf............fccf.......
        ...............ff.............fcf.......
        ..............................fcf.......
        ...............................ff.......
        `,img`
        ....................ffffff..............
        .................fffcccccf..............
        ................fccccccff...............
        ..........ffffffccccccf.................
        .........fcccccccccccf..................
        ......ffffccfccccccccff.................
        .....fcccccccfccfccccccff...............
        ....fccffccfccfccfcccccccff.............
        ...fccf2ccffccfcccfccccccccff...........
        ..fcccccccffccccccfccccccccccff.........
        ffcccccccffccccccccccccccccccccf........
        fcccccccff1cccf1ccccccccccccccccf.ffffff
        .ffffffff11ccccf11ffffffff1111cccfcccccf
        .....f11111fcccfff........ffff1ccccccff.
        ......ffffffcccf..............fccccff...
        ............fcccf.............fcccf.....
        .............ffcf.............fccf......
        ...............ff..............fcf......
        ...............................fcf......
        ................................ff......
        `],
    200,
    true
    )
    鯊魚.follow(魔法師, 30)
    鯊魚的血量.attachToSprite(鯊魚, 3, 0)
    鯊魚.setPosition(randint(70, 380), randint(92, 30))
    魟魚 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . f b b b b f . . . . . . . 
        . . f b b b b b b f f . . . . . 
        . f b b b b b b b b b f . . . . 
        f b b 2 b b b b b b b b f f f f 
        . f b b b b b b b b b b b b b f 
        f b b 2 b b b b b b b b f f f f 
        . f b b b b b b b b b f . . . . 
        . . f b b b b b b f f . . . . . 
        . . . f b b b b f . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.魟魚)
    animation.runImageAnimation(
    魟魚,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . f b b b b f . . . . . . . 
        . . f b b b b b b f f . . . . . 
        . f b b b b b b b b b f . . . . 
        f b b 2 b b b b b b b b f f f f 
        . f b b b b b b b b b b b b b f 
        f b b 2 b b b b b b b b f f f f 
        . f b b b b b b b b b f . . . . 
        . . f b b b b b b f f . . . . . 
        . . . f b b b b f . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . f b b b b f . . . . . . . 
        . . f b b b b b b f f . . . f f 
        . f b b b b b b b b b f . f b f 
        f b b 2 b b b b b b b b f b f . 
        . f b b b b b b b b b b b b f . 
        f b b 2 b b b b b b b b f f . . 
        . f b b b b b b b b b f . . . . 
        . . f b b b b b b f f . . . . . 
        . . . f b b b b f . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . f b b b b f . . . . . . . 
        . . f b b b b b b f f . . . . . 
        . f b b b b b b b b b f . . . . 
        f b b 2 b b b b b b b b f f . . 
        . f b b b b b b b b b b b b f . 
        f b b 2 b b b b b b b b f b f . 
        . f b b b b b b b b b f . f b f 
        . . f b b b b b b f f . . . f f 
        . . . f b b b b f . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
    魟魚.follow(魔法師, 30)
    魟魚的血量.attachToSprite(魟魚, 3, 0)
    魟魚.setPosition(randint(70, 380), randint(92, 30))
    水母 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.水母)
    animation.runImageAnimation(
    水母,
    [img`
        . . . . . f f f f f . . . . . . 
        . . . . f 3 3 3 3 3 f . . . . . 
        . . . f 3 3 3 3 3 3 3 f . . . . 
        . . f f 3 3 3 3 3 3 3 f f . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f f f f f f f f f f f . . . 
        . . . f . f f . f . . f . . . . 
        . . f f . f . . f . . f f . . . 
        . . f . . f . . f f . . f . . . 
        . . f . . f . . . f . . f . . . 
        . . f . . f . . . f . . f . . . 
        . . f f . f f . . f . . f f . . 
        . . . f . . f . . . . . . f . . 
        . . . . . . f . . . . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 3 3 3 3 3 f . . . . . 
        . . . f 3 3 3 3 3 3 3 f . . . . 
        . . f f 3 3 3 3 3 3 3 f f . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f f f f f f f f f f f . . . 
        . . . f . . f . . f . . f . . . 
        . . . f f . f . . f . f f . . . 
        . . . . f . f . f f . f . . . . 
        . . . . f . f . f . . f . . . . 
        . . . . f . f . f . . f . . . . 
        . . . f f f f . f f . f f f . . 
        . . . f . f . . . . . . . f . . 
        . . . . . f . . . . . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 3 3 3 3 3 f . . . . . 
        . . . f 3 3 3 3 3 3 3 f . . . . 
        . . f f 3 3 3 3 3 3 3 f f . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f f f f f f f f f f f . . . 
        . . . f . . f . . f . . f . . . 
        . . . f f . f . . f . f f . . . 
        . . . . f . f . f f . f . . . . 
        . . . . f . f . f . . f . . . . 
        . . . . f . f . f . . f . . . . 
        . . . f f f f . f f . f f f . . 
        . . . f . f . . . . . . . f . . 
        . . . . . f . . . . . . . . . . 
        `],
    200,
    true
    )
    水母.follow(魔法師, 30)
    水母的血量.attachToSprite(水母, 3, 0)
    水母.setPosition(randint(70, 380), randint(92, 30))
    金幣 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . f 5 5 f . . . . . f 5 5 f . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.金幣5)
    金幣.setPosition(randint(70, 380), 92)
    元寶 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . f f f . f 5 5 f . f f f . 
        . . . f 5 5 f 5 5 5 5 f 5 5 f . 
        . . . f 5 5 5 f f f f 5 5 5 f . 
        . . . f f 5 5 5 5 5 5 5 5 f f . 
        . . . . f 5 5 5 5 5 5 5 5 f . . 
        . . . . f f 5 5 5 5 5 5 f f . . 
        . . . . . f f 5 5 5 5 f f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.元寶5)
    元寶.setPosition(randint(70, 380), 92)
    寶箱 = sprites.create(img`
        . . f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e e f . 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 5 e e e e e e e e e e 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f f f f f f f d d f f f f f f f 
        c f f f f f f c c f f f f f f c 
        c c c c c c f c c f c c c c c c 
        f 5 5 5 5 5 c f f c 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f c 5 5 5 5 5 5 5 5 5 5 5 5 c f 
        f f f f f f f f f f f f f f f f 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.寶箱2)
    寶箱.setPosition(randint(280, 380), 92)
    生命 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . f f . . . . 
        . . . . f 2 2 f . f 2 2 f . . . 
        . . . f 2 2 2 2 f 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . . f 2 2 2 2 2 2 2 f . . . 
        . . . . . f 2 2 2 2 2 f . . . . 
        . . . . . . f 2 2 2 f . . . . . 
        . . . . . . . f 2 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.生命5)
    生命.setPosition(randint(70, 380), 92)
    旗子.setKind(SpriteKind.旗子5)
    魔法師.setKind(SpriteKind.魔法師5)
})
sprites.onOverlap(SpriteKind.能量4, SpriteKind.蟒蛇, function (sprite, otherSprite) {
    sprite.destroy()
    蟒蛇的血量.value += -20
})
sprites.onOverlap(SpriteKind.play射手, SpriteKind.龍, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    龍的血量.value += -20
})
statusbars.onZero(StatusBarKind.螳螂, function (status) {
    螳螂.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.槍手1, SpriteKind.金幣, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
statusbars.onZero(StatusBarKind.老虎, function (status) {
    老虎.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.劍士2, SpriteKind.元寶2, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.魔法師4, SpriteKind.向日葵, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.劍士3, SpriteKind.旗子3, function (sprite, otherSprite) {
    tiles.setTilemap(tilemap`層級28`)
    劍士.setStayInScreen(true)
    食人花的血量 = statusbars.create(20, 4, StatusBarKind.食人花)
    食人花的血量.setColor(8, 2)
    向日葵的血量 = statusbars.create(20, 4, StatusBarKind.向日葵)
    向日葵的血量.setColor(8, 2)
    含羞草的血量 = statusbars.create(20, 4, StatusBarKind.含羞草)
    含羞草的血量.setColor(8, 2)
    info.startCountdown(30)
    旗子.setPosition(630, 90)
    sprite.setPosition(0, 92)
    食人花 = sprites.create(img`
        . . . f 1 1 f 1 1 f 1 1 f . . . 
        . . . . f 1 1 f f 1 1 f . . . . 
        . . . f 1 f 1 1 1 1 f 2 f . . . 
        . . . f 2 2 f 1 1 f 2 2 f . . . 
        . . f 2 2 1 1 f f 2 2 2 1 f . . 
        . . f 2 2 1 1 2 2 1 1 2 2 f . . 
        . . . f 2 2 2 2 2 1 1 2 f . . . 
        . . . . f f 1 2 2 2 f f . . . . 
        . f f . . . f f f f . . . f f . 
        f 7 7 f f . f 7 7 f . f f 7 7 f 
        f 7 7 7 7 f f 7 7 f f 7 7 7 7 f 
        f 7 7 f 7 7 f 7 7 f 7 7 f 7 7 f 
        . f 7 7 f 7 f 7 7 f 7 f 7 7 f . 
        . . f f 7 f f 7 7 f f 7 f f . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . . . . f 7 7 f . . . . . . 
        `, SpriteKind.食人花)
    animation.runImageAnimation(
    食人花,
    [img`
        . . . f 1 1 f . . f 1 1 f . . . 
        . . . . f 1 1 f f 1 1 f . . . . 
        . . . f 1 f 1 1 1 1 f 2 f . . . 
        . . . f 2 2 f 1 1 f 2 2 f . . . 
        . . f 2 2 1 1 f f 2 2 2 1 f . . 
        . . f 2 2 1 1 2 2 1 1 2 2 f . . 
        . . . f 2 2 2 2 2 1 1 2 f . . . 
        . . . . f f 1 2 2 2 f f . . . . 
        . f f . . . f f f f . . . f f . 
        f 7 7 f f . f 7 7 f . f f 7 7 f 
        f 7 7 7 7 f f 7 7 f f 7 7 7 7 f 
        f 7 7 f 7 7 f 7 7 f 7 7 f 7 7 f 
        . f 7 7 f 7 f 7 7 f 7 f 7 7 f . 
        . . f f 7 f f 7 7 f f 7 f f . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . . . . f 7 7 f . . . . . . 
        `,img`
        . . . . . . f f . f f f f . . . 
        . . . . . . f 1 f 2 2 2 1 f . . 
        . . . . . . f 1 1 f 2 2 2 f . . 
        . . . . . . . f 1 1 f 2 1 1 f . 
        . . . . . . . . f 1 f 2 1 1 f . 
        . . . . . . . f 1 1 f 1 2 2 f . 
        . . . . . . f 1 1 f 1 1 2 f . . 
        . . . . . . f 1 f 1 2 2 2 f . . 
        . . . . . . f f . f f f f . . . 
        . . . . f f . . . . f 7 7 f . . 
        . . . f 7 7 f . . . f 7 7 f f f 
        . . . f 7 7 7 f . f 7 7 f f 7 7 
        . . . . f f 7 7 f f 7 7 f 7 7 f 
        . . . . . . f f 7 7 7 f f f f . 
        . . . . . . f 7 7 7 f f . . . . 
        . . . . . . f 7 7 f . . . . . . 
        `],
    500,
    true
    )
    食人花的血量.attachToSprite(食人花, 3, 0)
    食人花.setPosition(randint(70, 380), 92)
    向日葵 = sprites.create(img`
        .......f5555f...fffff...
        ......f555555fff55555f..
        ..fffff55555555555555f..
        .f5555f55eeeeee555555f..
        f555555eee4444eee5555f..
        f55555ee44444444ee555f..
        f55555e4444444444e55f...
        ff555ee4444444444ee5f...
        .fff5e444244442444e55ff.
        ..f55e444444444444e5555f
        .f555e444444444444e55555
        f5555e444222222444e55555
        f5555ee442ffff244ee55555
        f55555e4422222244e55555f
        f55555ee44444444ee5555f.
        .f55555eee4444eee5555f..
        ..fff5555eeeeee55555f...
        .....f55555ee5555555f...
        .....f55555eef555555f...
        .....f5555fee.f55555f...
        ......f777.ee.777fff....
        ......77777ee77777......
        ......777777777777......
        .......7777777777.......
        `, SpriteKind.向日葵)
    animation.runImageAnimation(
    向日葵,
    [img`
        .......f5555f...fffff...
        ......f555555fff55555f..
        ..fffff55555555555555f..
        .f5555f55eeeeee555555f..
        f555555eee4444eee5555f..
        f55555ee44444444ee555f..
        f55555e4444444444e55f...
        ff555ee4444444444ee5f...
        .fff5e444244442444e55ff.
        ..f55e444444444444e5555f
        .f555e444444444444e55555
        f5555e444222222444e55555
        f5555ee442ffff244ee55555
        f55555e4422222244e55555f
        f55555ee44444444ee5555f.
        .f55555eee4444eee5555f..
        ..fff5555eeeeee55555f...
        .....f55555ee5555555f...
        .....f55555eef555555f...
        .....f5555fee.f55555f...
        ......f777.ee.777fff....
        ......77777ee77777......
        ......777777777777......
        .......7777777777.......
        `,img`
        ..ee...f5555f.e.fffff.e.
        e....ef555555fff55555f..
        ..fffff55555555555555f.e
        .f5555f55eeeeee555555f..
        f555555eee4444eee5555f.e
        f55555ee44444444ee555f..
        f55555e4444444444e55f.e.
        ff555ee4444444444ee5f...
        .fff5e444244442444e55ff.
        ..f55e444444444444e5555f
        .f555e444444444444e55555
        f5555e444442224444e55555
        f5555ee44442f2444ee55555
        f55555e4444222444e55555f
        f55555ee44444444ee5555f.
        .f55555eee4444eee5555f..
        ..fff5555eeeeee55555f..e
        e..e.f55555ee5555555fe..
        .....f55555eef555555f...
        ..e..f5555fee.f55555f.e.
        e....ef777.ee.777fff....
        ......77777ee77777...e..
        .e.e..777777777777.e..e.
        .......7777777777.......
        `],
    500,
    true
    )
    向日葵的血量.attachToSprite(向日葵, 3, 0)
    向日葵.setPosition(randint(70, 380), 92)
    含羞草 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f . . . . . . . . . 
        . . f 7 7 7 7 f . . . . . . . . 
        . . . f 7 7 f . . . f . . . . . 
        . . . f 7 7 7 f . f 7 f . . . . 
        . . f 7 7 f 7 7 f 7 7 f . . . . 
        . . f 7 f . f 7 7 7 f . . . . . 
        . . . f . . f 7 7 f . . . . . . 
        . . . . . f 7 7 7 f . f f f . . 
        . . . . f 7 7 f 7 7 f f 7 7 f . 
        . . . . . f f . f 7 f 7 7 f . . 
        . . . . . . . . f 7 7 7 f . . . 
        . . . . . . . f 7 7 7 f . . . . 
        . . . . . . f 7 7 f 7 7 f . . . 
        . . . . . . . f f . f 7 f . . . 
        . . . . . . . . . . f 7 f . . . 
        `, SpriteKind.含羞草)
    animation.runImageAnimation(
    含羞草,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f . . . . . . . . . 
        . . f 7 7 7 7 f . . . . . . . . 
        . . . f 7 7 f . . . f . . . . . 
        . . . f 7 7 7 f . f 7 f . . . . 
        . . f 7 7 f 7 7 f 7 7 f . . . . 
        . . f 7 f . f 7 7 7 f . . . . . 
        . . . f . . f 7 7 f . . . . . . 
        . . . . . f 7 7 7 f . f f f . . 
        . . . . f 7 7 f 7 7 f f 7 7 f . 
        . . . . . f f . f 7 f 7 7 f . . 
        . . . . . . . . f 7 7 7 f . . . 
        . . . . . . . f 7 7 7 f . . . . 
        . . . . . . f 7 7 f 7 7 f . . . 
        . . . . . . . f f . f 7 f . . . 
        . . . . . . . . . . f 7 f . . . 
        `],
    500,
    true
    )
    含羞草的血量.attachToSprite(含羞草, 3, 0)
    含羞草.setPosition(randint(70, 380), 92)
    金幣 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . f 5 5 f . . . . . f 5 5 f . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.金幣4)
    金幣.setPosition(randint(70, 380), 92)
    元寶 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . f f f . f 5 5 f . f f f . 
        . . . f 5 5 f 5 5 5 5 f 5 5 f . 
        . . . f 5 5 5 f f f f 5 5 5 f . 
        . . . f f 5 5 5 5 5 5 5 5 f f . 
        . . . . f 5 5 5 5 5 5 5 5 f . . 
        . . . . f f 5 5 5 5 5 5 f f . . 
        . . . . . f f 5 5 5 5 f f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.元寶4)
    元寶.setPosition(randint(70, 380), 92)
    寶箱 = sprites.create(img`
        . . f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e e f . 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 5 e e e e e e e e e e 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f f f f f f f d d f f f f f f f 
        c f f f f f f c c f f f f f f c 
        c c c c c c f c c f c c c c c c 
        f 5 5 5 5 5 c f f c 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f c 5 5 5 5 5 5 5 5 5 5 5 5 c f 
        f f f f f f f f f f f f f f f f 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.寶箱)
    寶箱.setPosition(randint(280, 380), 92)
    生命 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . f f . . . . 
        . . . . f 2 2 f . f 2 2 f . . . 
        . . . f 2 2 2 2 f 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . . f 2 2 2 2 2 2 2 f . . . 
        . . . . . f 2 2 2 2 2 f . . . . 
        . . . . . . f 2 2 2 f . . . . . 
        . . . . . . . f 2 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.生命4)
    生命.setPosition(randint(70, 380), 92)
    旗子.setKind(SpriteKind.旗子4)
    劍士.setKind(SpriteKind.劍士4)
})
sprites.onOverlap(SpriteKind.劍士1, SpriteKind.旗子1, function (sprite, otherSprite) {
    tiles.setTilemap(tilemap`層級18`)
    劍士.setStayInScreen(true)
    蟒蛇的血量 = statusbars.create(20, 4, StatusBarKind.蟒蛇)
    蟒蛇的血量.setColor(8, 2)
    狼的血量 = statusbars.create(20, 4, StatusBarKind.狼)
    狼的血量.setColor(8, 2)
    老虎的血量 = statusbars.create(20, 4, StatusBarKind.老虎)
    老虎的血量.setColor(8, 2)
    info.startCountdown(30)
    旗子.setPosition(630, 90)
    sprite.setPosition(0, 92)
    蟒蛇 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f 7 7 7 7 7 f . . . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . f 7 2 7 7 2 7 7 f . . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . . . f 2 f f f f f . . . . 
        . . . f f 7 2 f 7 7 7 f f . . . 
        . . f 7 7 7 f 7 7 7 7 f 7 f . . 
        . f 7 7 f 7 7 7 7 7 f 7 7 7 f . 
        . f 7 7 7 f f f f f 7 7 7 f 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 f 7 f 
        . . f 7 7 7 7 7 7 7 7 7 f f 7 f 
        . . . f f f f f f f f f . . f . 
        `, SpriteKind.蟒蛇)
    animation.runImageAnimation(
    蟒蛇,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f 7 7 7 7 7 f . . . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . f 7 2 7 7 2 7 7 f . . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . . . f 2 f f f f f . . . . 
        . . . f f 7 2 f 7 7 7 f f . . . 
        . . f 7 7 7 f 7 7 7 7 f 7 f . . 
        . f 7 7 f 7 7 7 7 7 f 7 7 7 f . 
        . f 7 7 7 f f f f f 7 7 7 f 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 f 7 f 
        . . f 7 7 7 7 7 7 7 7 7 f f 7 f 
        . . . f f f f f f f f f . . f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f f f f . . . 
        . . . . . . . f 7 7 7 7 7 f . . 
        . . . . . . . f 7 7 7 7 7 7 f . 
        . . . . . . f 7 2 7 7 2 7 7 f . 
        f f . . . . f 7 7 7 7 7 7 7 7 f 
        f 7 f f . . f f 7 7 7 7 7 7 7 f 
        . f 7 f f . . f 2 f f f f f f f 
        . f 7 7 f f . . 2 f 7 7 7 7 f . 
        . . f 7 7 f f . . f 7 7 7 7 f . 
        . . f 7 7 7 f f f f 7 7 7 7 f . 
        . . . f 7 7 7 7 7 7 7 7 7 7 f . 
        . . . f f f 7 7 7 7 7 7 7 7 f . 
        . . . . . f f f f 7 7 7 f f f . 
        . . . . . . . . f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
    蟒蛇.follow(劍士, 30)
    蟒蛇的血量.attachToSprite(蟒蛇, 3, 0)
    蟒蛇.setPosition(randint(70, 380), 92)
    狼 = sprites.create(img`
        ........................
        ........................
        .....ff.ff..............
        .....fcfcf..............
        ....fccccff.............
        ....fc2cccfffffff.......
        ...fccccccccccccfff.....
        ...fccccccccccccccff....
        ....fffccccccccccccf....
        .......fcccccccccccff...
        ......fccffffffcffccf...
        .....ffcfcf..ffcf.fcf...
        .....fccfcf.fcfcf.fcf...
        ....fccffff.ffccf.fff...
        ....ffff.....ffff.ff....
        ........................
        `, SpriteKind.狼)
    animation.runImageAnimation(
    狼,
    [img`
        ........................
        ........................
        .....ff.ff..............
        .....fcfcf..............
        ....fccccff.............
        ....fc2cccfffffff.......
        ...fccccccccccccfff.....
        ...fccccccccccccccff....
        ....fffccccccccccccf....
        .......fcccccccccccff...
        ......fccffffffcffccf...
        .....ffcfcf..ffcf.fcf...
        .....fccfcf.fcfcf.fcf...
        ....fccffff.ffccf.fff...
        ....ffff.....ffff.......
        ........................
        `,img`
        ........................
        ........................
        .....ff.ff..............
        .....fcfcf..............
        ....fccccff.............
        ....fc2cccfffffff.......
        ...fccccccccccccfff.....
        ...f1f1cccccccccccff....
        ....fccccccccccccccf....
        ....ffffcccccccccccff...
        ......fccffffffcffccf...
        .....ffcfcf..ffcf.fcf...
        .....fccfcf.fcfcf.fcf...
        ....fccffff.ffccf.fff...
        ....ffff.....ffff.......
        ........................
        `,img`
        ........................
        ........................
        .....ff.ff..............
        .....fcfcf..............
        ....fccccff.............
        ....fc2cccfffffff.......
        ...fccccccccccccfff.....
        ...fccccccccccccccff....
        ....fffccccccccccccf....
        .......fcccccccccccff...
        ......fccffffffcffccf...
        .....ffcfcf..ffcf.fcf...
        .....fccfcf.fcfcf.fcf...
        ....fccffff.ffccf.fff...
        ....ffff.....ffff.......
        ........................
        `],
    200,
    true
    )
    狼.follow(劍士, 30)
    狼的血量.attachToSprite(狼, 3, 0)
    狼.setPosition(randint(70, 380), 92)
    老虎 = sprites.create(img`
        ........................
        .ff....ff...............
        .f4ffff4f...............
        ..ff4f4f................
        .f44444fff..............
        .f42424f4fffffffff......
        .ff444ff44f444f444f.....
        ..f121f444f4f4f4f44f....
        ...fff444444f4f4f444f...
        .....f4f4f44f444f4444f..
        .....f4f4ffffff444ff4f..
        ......f44f4f.f4f44f.f4f.
        .......f4f4fff4ff4f..f4f
        ......ff4ffff11ff4f..f4f
        ......f11f..ffff11f...f.
        ......ffff.....ffff.....
        `, SpriteKind.老虎)
    animation.runImageAnimation(
    老虎,
    [img`
        ........................
        .ff....ff...............
        .f4ffff4f...............
        ..ff4f4f................
        .f44444fff..............
        .f42424f4fffffffff......
        .ff444ff44f444f444f.....
        ..f121f444f4f4f4f44f....
        ...fff444444f4f4f444f...
        .....f4f4f44f444f4444f..
        .....f4f4ffffff444ff4f..
        ......f44f4f.f4f44f.f4f.
        .......f4f4fff4ff4f..f4f
        ......ff4ffff11ff4f..f4f
        ......f11f..ffff11f...f.
        ......ffff.....ffff.....
        `,img`
        ........................
        .ff....ff...............
        .f4ffff4f...............
        ..ff4f4f................
        .f44444fff..............
        .f42424f4fffffffff......
        .ff444ff44f444f444f.....
        ..f121f444f4f4f4f44f....
        ...fff444444f4f4f444f...
        ..f4ff4f4f44f444f4444f..
        ff4f.f4f4ffffff444ff4f..
        14f...f44f...f4f44f.f4f.
        fff....f4f..ff4ff4f..f4f
        ......ff4f..f11ff4f..f4f
        ......f11f..ffff11f...f.
        ......ffff.....ffff.....
        `],
    200,
    true
    )
    老虎.follow(劍士, 30)
    老虎的血量.attachToSprite(老虎, 3, 0)
    老虎.setPosition(randint(70, 380), 92)
    金幣 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . f 5 5 f . . . . . f 5 5 f . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.金幣2)
    金幣.setPosition(randint(70, 380), 92)
    元寶 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . f f f . f 5 5 f . f f f . 
        . . . f 5 5 f 5 5 5 5 f 5 5 f . 
        . . . f 5 5 5 f f f f 5 5 5 f . 
        . . . f f 5 5 5 5 5 5 5 5 f f . 
        . . . . f 5 5 5 5 5 5 5 5 f . . 
        . . . . f f 5 5 5 5 5 5 f f . . 
        . . . . . f f 5 5 5 5 f f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.元寶2)
    元寶.setPosition(randint(70, 380), 92)
    生命 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . f f . . . . 
        . . . . f 2 2 f . f 2 2 f . . . 
        . . . f 2 2 2 2 f 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . . f 2 2 2 2 2 2 2 f . . . 
        . . . . . f 2 2 2 2 2 f . . . . 
        . . . . . . f 2 2 2 f . . . . . 
        . . . . . . . f 2 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.生命2)
    生命.setPosition(randint(70, 380), 92)
    旗子.setKind(SpriteKind.旗子2)
    劍士.setKind(SpriteKind.劍士2)
})
sprites.onOverlap(SpriteKind.魔法師4, SpriteKind.含羞草, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.射手1, SpriteKind.元寶, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.魔法師4, SpriteKind.金幣4, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.劍士5, SpriteKind.金幣5, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.play劍士, SpriteKind.殭屍, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    殭屍的血量.value += -100
})
sprites.onOverlap(SpriteKind.player箭頭, SpriteKind.player魔法師, function (sprite, otherSprite) {
    箭頭.destroy()
    劍士.destroy()
    射手.destroy()
    魔法師.destroy()
    槍手.destroy()
    魔法師 = sprites.create(img`
        ........ffff............
        ......ffccccff..........
        .....fccccccccf.........
        ....fcccccccccf.........
        ....ffffcccccccf........
        .......fccccccccffff....
        ......fccccccccccccf....
        .....ffccccccccccff.....
        ....ffcccccccffff.......
        ....fccccffffdddf..fff..
        .....ffffd1fd1fdf..fa...
        .......ffd1fd1fdf..ff...
        ......fffdddddddff..f...
        ......ffffffffffff..f...
        ........fcccfccf....f...
        ........fcccfccfbbbdf...
        .......ffccfbfcff...f...
        .....fffcccfbfccfff.f...
        ....ffccccfbbbfcccf.f...
        ....fccccfbbbbbfcff.f...
        ....ffffffffffffff......
        ........fff.fff.........
        ........ff..ff..........
        ........................
        `, SpriteKind.player魔法師)
    魔法師.setPosition(60, 85)
    scene.cameraFollowSprite(魔法師)
    魔法師.say("我叫Wizard")
    pause(1000)
    魔法師.say("攻擊怪物時")
    pause(1000)
    魔法師.say("請按\"B上\"")
    pause(1500)
    魔法師.say("我的大招可以使周圍的怪物受到傷害")
    pause(4000)
    魔法師.say("使用大招時")
    pause(1000)
    魔法師.say("請按\"ABAB\"", 2000)
    pause(2000)
    controller.moveSprite(魔法師, 100, 0)
})
sprites.onOverlap(SpriteKind.play槍手, SpriteKind.老虎, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    老虎的血量.value += -20
})
sprites.onOverlap(SpriteKind.play槍手, SpriteKind.殭屍, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    殭屍的血量.value += -20
})
sprites.onOverlap(SpriteKind.魔法師4, SpriteKind.寶箱, function (sprite, otherSprite) {
    music.jumpUp.play()
    otherSprite.destroy()
    info.changeScoreBy(3)
})
sprites.onOverlap(SpriteKind.能量1, SpriteKind.狼, function (sprite, otherSprite) {
    sprite.destroy()
    狼的血量.value += -20
})
sprites.onOverlap(SpriteKind.能量1, SpriteKind.鯊魚, function (sprite, otherSprite) {
    sprite.destroy()
    鯊魚的血量.value += -20
})
sprites.onOverlap(SpriteKind.play槍手, SpriteKind.蜜蜂, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    蜜蜂的血量.value += -20
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.能量4, SpriteKind.龍, function (sprite, otherSprite) {
    sprite.destroy()
    龍的血量.value += -5
})
statusbars.onZero(StatusBarKind.龍, function (status) {
    龍.destroy()
    info.changeScoreBy(5)
})
sprites.onOverlap(SpriteKind.槍手5, SpriteKind.鯊魚, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.射手2, SpriteKind.狼, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.劍士5, SpriteKind.魟魚, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.能量3, SpriteKind.水母, function (sprite, otherSprite) {
    sprite.destroy()
    水母的血量.value += -20
})
sprites.onOverlap(SpriteKind.劍士4, SpriteKind.生命4, function (sprite, otherSprite) {
    music.powerUp.play()
    otherSprite.destroy()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.槍手2, SpriteKind.老虎, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
controller.combos.attachCombo("ABAB", function () {
    music.beamUp.play()
    魔法師.say("诅咒", 600)
    animation.runImageAnimation(
    魔法師,
    [img`
        ........ffff......................
        ......ffccccff....................
        .....fccccccccf...................
        ....fcccccccccf...................
        ....ffffcccccccf..................
        .......fccccccccffff..............
        ......fccccccccccccf..............
        .....ffccccccccccff...............
        ....ffcccccccffff.................
        ....fccccffffdddf..fff............
        .....ffffd1fd1fdf..fa.............
        .......ffd1fd1fdf..ff.............
        ......fffdddddddff..f.............
        ......ffffffffffff..f.............
        ........fcccfccf....f.............
        ........fcccfccfbbbdf.............
        .......ffccfbfcff...f.............
        .....fffcccfbfccfff.f.............
        ....ffccccfbbbfcccf.f.............
        ....fccccfbbbbbfcff.f.............
        ....ffffffffffffff................
        ........fff.fff...................
        ........ff..ff....................
        ..................................
        `,img`
        ........ffff......................
        ......ffccccff....................
        .....fccccccccf...................
        ....fcccccccccf...................
        ....ffffcccccccf..................
        .......fccccccccffff..............
        ......fccccccccccccf..............
        .....ffccccccccccff...............
        ....ffcccccccffff.................
        ....fccccffffdddf..fff............
        .....ffffd1fd1fdf..fa.............
        .......ffd1fd1fdf..ff.............
        ......fffdddddddff..f.............
        ......ffffffffffff..f.............
        ........fcccfccf....f.............
        ........fcccfccfbbbdf.............
        .......ffccfbfcff...f.............
        .....fffcccfbfccfff.f.............
        ....ffccccfbbbfcccf.f.............
        ....fccccfbbbbbfcff.f.............
        ....ffffffffffffff................
        ..........fff.....................
        ..........fff.....................
        ..................................
        `,img`
        ........ffff......................
        ......ffccccff....................
        .....fccccccccf...................
        ....fcccccccccf...................
        ....ffffcccccccf..................
        .......fccccccccffff..............
        ......fccccccccccccf..............
        .....ffccccccccccff...............
        ....ffcccccccffff.................
        ....fccccffffdddf.................
        .....ffffd1fd1fdf.................
        .......ffd1fd1fdf.................
        ......fffdddddddff................
        ......ffffffffffff................
        ........fcccfccf.........fff......
        ........fcccfccfbbbdffffffaf......
        .......ffccfbfcff..........f......
        .....fffcccfbfccfff...............
        ....ffccccfbbbfcccf...............
        ....fccccfbbbbbfcff...............
        ....ffffffffffffff................
        ..........fff.....................
        ..........fff.....................
        ..................................
        `,img`
        ........ffff......................
        ......ffccccff....................
        .....fccccccccf...................
        ....fcccccccccf...................
        ....ffffcccccccf..................
        .......fccccccccffff..............
        ......fccccccccccccf..............
        .....ffccccccccccff...............
        ....ffcccccccffff.................
        ....fccccffffdddf.................
        .....ffffd1fd1fdf.................
        .......ffd1fd1fdf.................
        ......fffdddddddff................
        ......ffffffffffff................
        ........fcccfccf.........fff......
        ........fcccfccfbbbdffffffaf......
        .......ffccfbfcff..........f......
        .....fffcccfbfccfff...............
        ....ffccccfbbbfcccf...............
        ....fccccfbbbbbfcff...............
        ....ffffffffffffff................
        ........fff.fff...................
        ........ff..ff....................
        ..................................
        `,img`
        ........ffff......................
        ......ffccccff....................
        .....fccccccccf...................
        ....fcccccccccf...................
        ....ffffcccccccf..................
        .......fccccccccffff..............
        ......fccccccccccccf..............
        .....ffccccccccccff...............
        ....ffcccccccffff.................
        ....fccccffffdddf..fff............
        .....ffffd1fd1fdf..fa.............
        .......ffd1fd1fdf..ff.............
        ......fffdddddddff..f.............
        ......ffffffffffff..f.............
        ........fcccfccf....f.............
        ........fcccfccfbbbdf.............
        .......ffccfbfcff...f.............
        .....fffcccfbfccfff.f.............
        ....ffccccfbbbfcccf.f.............
        ....fccccfbbbbbfcff.f.............
        ....ffffffffffffff................
        ........fff.fff...................
        ........ff..ff....................
        ..................................
        `],
    100,
    false
    )
    魔法球 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . a a a a a a a a a a . . . 
        . . a a a a a a a a a a a a . . 
        . . a a a a a a a a a a a a . . 
        . . a a a a a a a a a a a a . . 
        . . a a a a a a a a a a a a . . 
        . . a a a a a a a a a a a a . . 
        . . a a a a a a a a a a a a . . 
        . . a a a a a a a a a a a a . . 
        . . a a a a a a a a a a a a . . 
        . . a a a a a a a a a a a a . . 
        . . a a a a a a a a a a a a . . 
        . . . a a a a a a a a a a . . . 
        . . . . . . . . . . . . . . . . 
        `, 魔法師, 35, 0)
    魔法球.startEffect(effects.halo)
    魔法球.setKind(SpriteKind.play魔法師)
    pause(500)
})
sprites.onOverlap(SpriteKind.player射手, SpriteKind.旗子, function (sprite, otherSprite) {
    tiles.setTilemap(tilemap`層級14`)
    射手.setStayInScreen(true)
    殭屍的血量 = statusbars.create(20, 4, StatusBarKind.殭屍)
    殭屍的血量.setColor(8, 2)
    鬼怪的血量 = statusbars.create(20, 4, StatusBarKind.鬼怪)
    鬼怪的血量.setColor(8, 2)
    蝙蝠的血量 = statusbars.create(20, 4, StatusBarKind.蝙蝠)
    蝙蝠的血量.setColor(8, 2)
    info.startCountdown(30)
    旗子.setPosition(630, 90)
    sprite.setPosition(0, 92)
    殭屍 = sprites.create(img`
        . . . f f f f f f f f . . . . . 
        . . f f f f f f f f 7 f . . . . 
        . f f 7 7 f 7 7 f 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . f 7 2 1 7 7 7 2 1 7 7 7 f . . 
        . f 7 1 1 f 7 f 1 1 7 7 7 f . . 
        . . f 7 7 7 7 7 7 7 7 7 f . . . 
        . . . f 2 1 2 1 2 2 7 f . . . . 
        . . . f 1 2 2 2 1 7 f f . . . . 
        . f f f f f f f f f f . . . . . 
        f 7 7 7 f c f 7 7 7 7 f . . . . 
        f 7 7 f f c f 7 7 7 7 f . . . . 
        f f f . f f f f f f f . . . . . 
        . . . f f c f f c c f . . . . . 
        . . . f 7 7 7 f 7 7 7 f . . . . 
        . . . f f f f f f f f f . . . . 
        `, SpriteKind.殭屍)
    animation.runImageAnimation(
    殭屍,
    [img`
        . . . f f f f f f f f . . . . . 
        . . f f f f f f f f 7 f . . . . 
        . f f 7 7 f 7 7 f 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . f 7 2 1 7 7 7 2 1 7 7 7 f . . 
        . f 7 1 1 f 7 f 1 1 7 7 7 f . . 
        . . f 7 7 7 7 7 7 7 7 7 f . . . 
        . . . f 2 1 2 1 2 2 7 f . . . . 
        . . . f 1 2 2 2 1 7 f f . . . . 
        . f f f f f f f f f f . . . . . 
        f 7 7 7 f c f 7 7 7 7 f . . . . 
        f 7 7 f f c f 7 7 7 7 f . . . . 
        f f f . f f f f f f f . . . . . 
        . . . f f c f f c c f . . . . . 
        . . . f 7 7 7 f 7 7 7 f . . . . 
        . . . f f f f f f f f f . . . . 
        `,img`
        . . . f f f f f f f f . . . . . 
        . . f f f f f f f f 7 f . . . . 
        . f f 7 7 f 7 7 f 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . f 7 2 1 7 7 7 2 1 7 7 7 f . . 
        . f 7 1 1 f 7 f 1 1 7 7 7 f . . 
        . . f 7 2 1 2 1 2 2 7 7 f . . . 
        . . . f 2 2 2 2 2 2 7 f . . . . 
        . . . f 1 2 2 2 1 2 f f . . . . 
        . f f f f f f f f f f . . . . . 
        f 7 7 7 f c f 7 7 7 7 f . . . . 
        f 7 7 f f c f 7 7 7 7 f . . . . 
        f f f . f f f f f f f . . . . . 
        . . . f f c f f c c f . . . . . 
        . . . f 7 7 7 f 7 7 7 f . . . . 
        . . . f f f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f . . . . . 
        . . f f f f f f f f 7 f . . . . 
        . f f 7 7 f 7 7 f 7 7 f f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . f 7 2 1 7 7 7 2 1 7 7 f . . . 
        . . f 1 1 f 7 f 1 1 7 f . . . . 
        . . . f 7 7 7 7 7 7 f f . . . . 
        . f f f f f f f f f f . . . . . 
        f 7 7 7 f c f 7 7 7 7 f . . . . 
        f 7 7 f f c f 7 7 7 7 f . . . . 
        f f f . f f f f f f f . . . . . 
        . . . f f c f f c c f . . . . . 
        . . . f 7 7 7 f 7 7 7 f . . . . 
        . . . f f f f f f f f f . . . . 
        `],
    500,
    true
    )
    殭屍.follow(射手, 30)
    殭屍的血量.attachToSprite(殭屍, 3, 0)
    殭屍.setPosition(randint(70, 380), 92)
    鬼怪 = sprites.create(img`
        ........................
        ........................
        ........................
        .........fffff..........
        .......ff11111ff........
        ......f111111111f.......
        .....f11111111111f......
        .....f11111111111f......
        ....f1122112211111f.....
        ....f1222112221111f.....
        ....f1222112221111f.....
        ....f1221111221111f.....
        ....f1111111111111f.....
        ....f1111ff111ff11f.....
        ...f1f111ff11f1111f.....
        ...f1ff111111f1f111f....
        ....f..ff1111ff11111f...
        .........fff1111111f....
        ............fffffff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.鬼怪)
    animation.runImageAnimation(
    鬼怪,
    [img`
        ........................
        ........................
        ........................
        .........fffff..........
        .......ff11111ff........
        ......f111111111f.......
        .....f11111111111f......
        .....f11111111111f......
        ....f1122112211111f.....
        ....f1222112221111f.....
        ....f1222112221111f.....
        ....f1221111221111f.....
        ....f1111111111111f.....
        ....f1111ff111ff11f.....
        ...f1f111ff11f1111f.....
        ...f1ff111111f1f111f....
        ....f..ff1111ff11111f...
        .........fff1111111f....
        ............fffffff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        .........fffff..........
        .......ff11111ff........
        ......f111111111f.......
        .fff.f1111111fff1f......
        .f1fff1111111f11ff......
        .f11f112211221f111f.....
        ..f1f1222112221f11f.....
        ...ff1222112221111f.....
        ....f1221111221111f.....
        ....f1111111111111f.....
        ....f1111ff1111111f.....
        .....f111ff1111111f.....
        .....ff111111111111f....
        .......ff11111111111f...
        .........fff1111111f....
        ............fffffff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    200,
    true
    )
    鬼怪.follow(射手, 30)
    鬼怪的血量.attachToSprite(鬼怪, 3, 0)
    鬼怪.setPosition(randint(70, 380), randint(92, 30))
    蝙蝠 = sprites.create(img`
        . . . b . . . . . . b b . . . . 
        . . . a b . . . . b a a . . . . 
        . . . a a b . . b a a a . . . . 
        . . . b a b b b b a a . . . . . 
        . . . . b b b b b b b . . . . . 
        . . . . b 2 b 2 b b b f b . . . 
        . . . . b 2 b 2 b b b f b b . . 
        . . . . b b b b b b f f f b b . 
        . . . b b . . . . . . . . b b b 
        . . . b b b . . . . . . . b b b 
        . . b b b b . . . . . . b b b b 
        . . b b b b b . . . . . b b b b 
        . . b b b b b . . . . . . b b b 
        . . . b b b . . . . . . . . b b 
        . . . . b . . . . . . . . . . b 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.蝙蝠)
    animation.runImageAnimation(
    蝙蝠,
    [img`
        ...b......bb............
        ...ab....baa............
        ...aab..baaa............
        ...babbbbaa.............
        ....bbbbbbb.............
        ....b2b2bbbfbf..........
        ....b2b2bbbfbb..........
        ....bbbbbbfffbb.........
        ...bb........bbb........
        ...bbb.......bbb........
        ..bbbb......bbbb........
        ..bbbbb.....bbbbb.......
        ..bbbbb.....bbbbb.......
        ...bbb.......bbb........
        ....b.........b.........
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        bbbb....................
        .dddbb..........bbbb....
        .bbdddb.......bbddd.....
        ...bbbbb.....bdddbb.....
        ...bddb..bb.bbbbbd......
        ...abbb.baa..bddd.......
        ...aabbbaaa..bbbd.......
        ...babbbaa...bddbb......
        ....bbbbbb..bdbdd.......
        ....b2b2bbfbdddb........
        ....b2b2bbfbff..........
        .....bbbbfff............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    200,
    true
    )
    蝙蝠.follow(射手, 30)
    蝙蝠的血量.attachToSprite(蝙蝠, 3, 0)
    蝙蝠.setPosition(randint(70, 380), randint(92, 30))
    金幣 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . f 5 5 f . . . . . f 5 5 f . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.金幣)
    金幣.setPosition(randint(70, 380), 92)
    元寶 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . f f f . f 5 5 f . f f f . 
        . . . f 5 5 f 5 5 5 5 f 5 5 f . 
        . . . f 5 5 5 f f f f 5 5 5 f . 
        . . . f f 5 5 5 5 5 5 5 5 f f . 
        . . . . f 5 5 5 5 5 5 5 5 f . . 
        . . . . f f 5 5 5 5 5 5 f f . . 
        . . . . . f f 5 5 5 5 f f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.元寶)
    元寶.setPosition(randint(70, 380), 92)
    生命 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . f f . . . . 
        . . . . f 2 2 f . f 2 2 f . . . 
        . . . f 2 2 2 2 f 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . . f 2 2 2 2 2 2 2 f . . . 
        . . . . . f 2 2 2 2 2 f . . . . 
        . . . . . . f 2 2 2 f . . . . . 
        . . . . . . . f 2 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.生命)
    生命.setPosition(randint(70, 380), 92)
    旗子.setKind(SpriteKind.旗子1)
    射手.setKind(SpriteKind.射手1)
})
sprites.onOverlap(SpriteKind.劍士6, SpriteKind.元寶6, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.槍手5, SpriteKind.元寶5, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.play劍士, SpriteKind.蜜蜂, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    蜜蜂的血量.value += -100
})
sprites.onOverlap(SpriteKind.魔法師3, SpriteKind.蜜蜂, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
statusbars.onZero(StatusBarKind.蜜蜂, function (status) {
    蜜蜂.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.魔法師1, SpriteKind.殭屍, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.能量4, SpriteKind.老虎, function (sprite, otherSprite) {
    sprite.destroy()
    老虎的血量.value += -20
})
sprites.onOverlap(SpriteKind.魔法師6, SpriteKind.龍, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.槍手3, SpriteKind.螳螂, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.射手4, SpriteKind.向日葵, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.劍士2, SpriteKind.金幣2, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.射手5, SpriteKind.元寶5, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.槍手2, SpriteKind.生命2, function (sprite, otherSprite) {
    music.powerUp.play()
    otherSprite.destroy()
    info.changeLifeBy(1)
})
statusbars.onZero(StatusBarKind.鬼怪, function (status) {
    鬼怪.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.play射手, SpriteKind.蝙蝠, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    蝙蝠的血量.value += -50
})
sprites.onOverlap(SpriteKind.射手3, SpriteKind.旗子3, function (sprite, otherSprite) {
    tiles.setTilemap(tilemap`層級28`)
    射手.setStayInScreen(true)
    食人花的血量 = statusbars.create(20, 4, StatusBarKind.食人花)
    食人花的血量.setColor(8, 2)
    向日葵的血量 = statusbars.create(20, 4, StatusBarKind.向日葵)
    向日葵的血量.setColor(8, 2)
    含羞草的血量 = statusbars.create(20, 4, StatusBarKind.含羞草)
    含羞草的血量.setColor(8, 2)
    info.startCountdown(30)
    旗子.setPosition(630, 90)
    sprite.setPosition(0, 92)
    食人花 = sprites.create(img`
        . . . f 1 1 f 1 1 f 1 1 f . . . 
        . . . . f 1 1 f f 1 1 f . . . . 
        . . . f 1 f 1 1 1 1 f 2 f . . . 
        . . . f 2 2 f 1 1 f 2 2 f . . . 
        . . f 2 2 1 1 f f 2 2 2 1 f . . 
        . . f 2 2 1 1 2 2 1 1 2 2 f . . 
        . . . f 2 2 2 2 2 1 1 2 f . . . 
        . . . . f f 1 2 2 2 f f . . . . 
        . f f . . . f f f f . . . f f . 
        f 7 7 f f . f 7 7 f . f f 7 7 f 
        f 7 7 7 7 f f 7 7 f f 7 7 7 7 f 
        f 7 7 f 7 7 f 7 7 f 7 7 f 7 7 f 
        . f 7 7 f 7 f 7 7 f 7 f 7 7 f . 
        . . f f 7 f f 7 7 f f 7 f f . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . . . . f 7 7 f . . . . . . 
        `, SpriteKind.食人花)
    animation.runImageAnimation(
    食人花,
    [img`
        . . . f 1 1 f . . f 1 1 f . . . 
        . . . . f 1 1 f f 1 1 f . . . . 
        . . . f 1 f 1 1 1 1 f 2 f . . . 
        . . . f 2 2 f 1 1 f 2 2 f . . . 
        . . f 2 2 1 1 f f 2 2 2 1 f . . 
        . . f 2 2 1 1 2 2 1 1 2 2 f . . 
        . . . f 2 2 2 2 2 1 1 2 f . . . 
        . . . . f f 1 2 2 2 f f . . . . 
        . f f . . . f f f f . . . f f . 
        f 7 7 f f . f 7 7 f . f f 7 7 f 
        f 7 7 7 7 f f 7 7 f f 7 7 7 7 f 
        f 7 7 f 7 7 f 7 7 f 7 7 f 7 7 f 
        . f 7 7 f 7 f 7 7 f 7 f 7 7 f . 
        . . f f 7 f f 7 7 f f 7 f f . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . . . . f 7 7 f . . . . . . 
        `,img`
        . . . . . . f f . f f f f . . . 
        . . . . . . f 1 f 2 2 2 1 f . . 
        . . . . . . f 1 1 f 2 2 2 f . . 
        . . . . . . . f 1 1 f 2 1 1 f . 
        . . . . . . . . f 1 f 2 1 1 f . 
        . . . . . . . f 1 1 f 1 2 2 f . 
        . . . . . . f 1 1 f 1 1 2 f . . 
        . . . . . . f 1 f 1 2 2 2 f . . 
        . . . . . . f f . f f f f . . . 
        . . . . f f . . . . f 7 7 f . . 
        . . . f 7 7 f . . . f 7 7 f f f 
        . . . f 7 7 7 f . f 7 7 f f 7 7 
        . . . . f f 7 7 f f 7 7 f 7 7 f 
        . . . . . . f f 7 7 7 f f f f . 
        . . . . . . f 7 7 7 f f . . . . 
        . . . . . . f 7 7 f . . . . . . 
        `,img`
        . . . . . . f f . f f f f . . . 
        . . . . . . f 1 f 2 2 2 1 f . . 
        . . . . . . f 1 1 f 2 2 2 f . . 
        . . . . . . . f 1 1 f 2 1 1 f . 
        . . . . . . . 4 f 1 f 2 1 1 f . 
        . . . . . . . f 1 1 f 1 2 2 f . 
        . . . . . . f 1 1 f 1 1 2 f . . 
        . . . . . . f 1 f 1 2 2 2 f . . 
        . . . . . . f f . f f f f . . . 
        . . . . f f . . . . f 7 7 f . . 
        . . . f 7 7 f . . . f 7 7 f f f 
        . . . f 7 7 7 f . f 7 7 f f 7 7 
        . . . . f f 7 7 f f 7 7 f 7 7 f 
        . . . . . . f f 7 7 7 f f f f . 
        . . . . . . f 7 7 7 f f . . . . 
        . . . . . . f 7 7 f . . . . . . 
        `,img`
        . . . . . . f f . f f f f . . . 
        . . . . . . f 1 f 2 2 2 1 f . . 
        . . . . . . f 1 1 f 2 2 2 f . . 
        . . . . . . . f 1 1 f 2 1 1 f . 
        . . . . 4 . . . f 1 f 2 1 1 f . 
        . . . . . . . f 1 1 f 1 2 2 f . 
        . . . . . . f 1 1 f 1 1 2 f . . 
        . . . . . . f 1 f 1 2 2 2 f . . 
        . . . . . . f f . f f f f . . . 
        . . . . f f . . . . f 7 7 f . . 
        . . . f 7 7 f . . . f 7 7 f f f 
        . . . f 7 7 7 f . f 7 7 f f 7 7 
        . . . . f f 7 7 f f 7 7 f 7 7 f 
        . . . . . . f f 7 7 7 f f f f . 
        . . . . . . f 7 7 7 f f . . . . 
        . . . . . . f 7 7 f . . . . . . 
        `],
    500,
    true
    )
    食人花的血量.attachToSprite(食人花, 3, 0)
    食人花.setPosition(randint(70, 380), 92)
    向日葵 = sprites.create(img`
        .......f5555f...fffff...
        ......f555555fff55555f..
        ..fffff55555555555555f..
        .f5555f55eeeeee555555f..
        f555555eee4444eee5555f..
        f55555ee44444444ee555f..
        f55555e4444444444e55f...
        ff555ee4444444444ee5f...
        .fff5e444244442444e55ff.
        ..f55e444444444444e5555f
        .f555e444444444444e55555
        f5555e444222222444e55555
        f5555ee442ffff244ee55555
        f55555e4422222244e55555f
        f55555ee44444444ee5555f.
        .f55555eee4444eee5555f..
        ..fff5555eeeeee55555f...
        .....f55555ee5555555f...
        .....f55555eef555555f...
        .....f5555fee.f55555f...
        ......f777.ee.777fff....
        ......77777ee77777......
        ......777777777777......
        .......7777777777.......
        `, SpriteKind.向日葵)
    animation.runImageAnimation(
    向日葵,
    [img`
        .......f5555f...fffff...
        ......f555555fff55555f..
        ..fffff55555555555555f..
        .f5555f55eeeeee555555f..
        f555555eee4444eee5555f..
        f55555ee44444444ee555f..
        f55555e4444444444e55f...
        ff555ee4444444444ee5f...
        .fff5e444244442444e55ff.
        ..f55e444444444444e5555f
        .f555e444444444444e55555
        f5555e444222222444e55555
        f5555ee442ffff244ee55555
        f55555e4422222244e55555f
        f55555ee44444444ee5555f.
        .f55555eee4444eee5555f..
        ..fff5555eeeeee55555f...
        .....f55555ee5555555f...
        .....f55555eef555555f...
        .....f5555fee.f55555f...
        ......f777.ee.777fff....
        ......77777ee77777......
        ......777777777777......
        .......7777777777.......
        `,img`
        ..ee...f5555f.e.fffff.e.
        e....ef555555fff55555f..
        ..fffff55555555555555f.e
        .f5555f55eeeeee555555f..
        f555555eee4444eee5555f.e
        f55555ee44444444ee555f..
        f55555e4444444444e55f.e.
        ff555ee4444444444ee5f...
        .fff5e444244442444e55ff.
        ..f55e444444444444e5555f
        .f555e444444444444e55555
        f5555e444442224444e55555
        f5555ee44442f2444ee55555
        f55555e4444222444e55555f
        f55555ee44444444ee5555f.
        .f55555eee4444eee5555f..
        ..fff5555eeeeee55555f..e
        e..e.f55555ee5555555fe..
        .....f55555eef555555f...
        ..e..f5555fee.f55555f.e.
        e....ef777.ee.777fff....
        ......77777ee77777...e..
        .e.e..777777777777.e..e.
        .......7777777777.......
        `],
    500,
    true
    )
    向日葵的血量.attachToSprite(向日葵, 3, 0)
    向日葵.setPosition(randint(70, 380), 92)
    含羞草 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f . . . . . . . . . 
        . . f 7 7 7 7 f . . . . . . . . 
        . . . f 7 7 f . . . f . . . . . 
        . . . f 7 7 7 f . f 7 f . . . . 
        . . f 7 7 f 7 7 f 7 7 f . . . . 
        . . f 7 f . f 7 7 7 f . . . . . 
        . . . f . . f 7 7 f . . . . . . 
        . . . . . f 7 7 7 f . f f f . . 
        . . . . f 7 7 f 7 7 f f 7 7 f . 
        . . . . . f f . f 7 f 7 7 f . . 
        . . . . . . . . f 7 7 7 f . . . 
        . . . . . . . f 7 7 7 f . . . . 
        . . . . . . f 7 7 f 7 7 f . . . 
        . . . . . . . f f . f 7 f . . . 
        . . . . . . . . . . f 7 f . . . 
        `, SpriteKind.含羞草)
    animation.runImageAnimation(
    含羞草,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f . . . . . . . . . 
        . . f 7 7 7 7 f . . . . . . . . 
        . . . f 7 7 f . . . f . . . . . 
        . . . f 7 7 7 f . f 7 f . . . . 
        . . f 7 7 f 7 7 f 7 7 f . . . . 
        . . f 7 f . f 7 7 7 f . . . . . 
        . . . f . . f 7 7 f . . . . . . 
        . . . . . f 7 7 7 f . f f f . . 
        . . . . f 7 7 f 7 7 f f 7 7 f . 
        . . . . . f f . f 7 f 7 7 f . . 
        . . . . . . . . f 7 7 7 f . . . 
        . . . . . . . f 7 7 7 f . . . . 
        . . . . . . f 7 7 f 7 7 f . . . 
        . . . . . . . f f . f 7 f . . . 
        . . . . . . . . . . f 7 f . . . 
        `],
    500,
    true
    )
    含羞草的血量.attachToSprite(含羞草, 3, 0)
    含羞草.setPosition(randint(70, 380), 92)
    金幣 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . f 5 5 f . . . . . f 5 5 f . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.金幣4)
    金幣.setPosition(randint(70, 380), 92)
    元寶 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . f f f . f 5 5 f . f f f . 
        . . . f 5 5 f 5 5 5 5 f 5 5 f . 
        . . . f 5 5 5 f f f f 5 5 5 f . 
        . . . f f 5 5 5 5 5 5 5 5 f f . 
        . . . . f 5 5 5 5 5 5 5 5 f . . 
        . . . . f f 5 5 5 5 5 5 f f . . 
        . . . . . f f 5 5 5 5 f f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.元寶4)
    元寶.setPosition(randint(70, 380), 92)
    寶箱 = sprites.create(img`
        . . f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e e f . 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 5 e e e e e e e e e e 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f f f f f f f d d f f f f f f f 
        c f f f f f f c c f f f f f f c 
        c c c c c c f c c f c c c c c c 
        f 5 5 5 5 5 c f f c 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f c 5 5 5 5 5 5 5 5 5 5 5 5 c f 
        f f f f f f f f f f f f f f f f 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.寶箱)
    寶箱.setPosition(randint(280, 380), 92)
    生命 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . f f . . . . 
        . . . . f 2 2 f . f 2 2 f . . . 
        . . . f 2 2 2 2 f 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . . f 2 2 2 2 2 2 2 f . . . 
        . . . . . f 2 2 2 2 2 f . . . . 
        . . . . . . f 2 2 2 f . . . . . 
        . . . . . . . f 2 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.生命4)
    生命.setPosition(randint(70, 380), 92)
    旗子.setKind(SpriteKind.旗子4)
    射手.setKind(SpriteKind.射手4)
})
sprites.onOverlap(SpriteKind.play射手, SpriteKind.蜜蜂, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    蜜蜂的血量.value += -50
})
statusbars.onZero(StatusBarKind.蟒蛇, function (status) {
    蟒蛇.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.play魔法師, SpriteKind.蜜蜂, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    蜜蜂的血量.value += -30
})
sprites.onOverlap(SpriteKind.能量2, SpriteKind.龍, function (sprite, otherSprite) {
    sprite.destroy()
    龍的血量.value += -5
})
sprites.onOverlap(SpriteKind.槍手5, SpriteKind.金幣5, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.槍手4, SpriteKind.向日葵, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.射手5, SpriteKind.魟魚, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.play槍手, SpriteKind.向日葵, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    向日葵的血量.value += -20
})
sprites.onOverlap(SpriteKind.射手5, SpriteKind.生命5, function (sprite, otherSprite) {
    music.powerUp.play()
    otherSprite.destroy()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.槍手4, SpriteKind.食人花, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.能量1, SpriteKind.水母, function (sprite, otherSprite) {
    sprite.destroy()
    水母的血量.value += -20
})
sprites.onOverlap(SpriteKind.射手1, SpriteKind.殭屍, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.play槍手, SpriteKind.蟒蛇, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    蟒蛇的血量.value += -20
})
sprites.onOverlap(SpriteKind.play槍手, SpriteKind.魟魚, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    魟魚的血量.value += -20
})
sprites.onOverlap(SpriteKind.射手5, SpriteKind.旗子5, function (sprite, otherSprite) {
    旗子.setFlag(SpriteFlag.Invisible, true)
    tiles.setTilemap(tilemap`層級36`)
    貝殼 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . f f b b d b d d b b f f . . 
        . f d d b d d b d d d b d d f . 
        f 1 1 b d d b d d b d d b 1 1 f 
        f f f f 1 1 f 1 1 f 1 1 f f f f 
        f b d f f f b f f b f f f d b f 
        . f b b d d b d d b d d b b f . 
        . . f f f f f f f f f f f f . . 
        `, SpriteKind.貝殼)
    animation.runImageAnimation(
    貝殼,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . f f b b d b d d b b f f . . 
        . f d d b d d b d d d b d d f . 
        f 1 1 b d d b d d b d d b 1 1 f 
        f f f f 1 1 f 1 1 f 1 1 f f f f 
        f b d f f f b f f b f f f d b f 
        . f b b d d b d d b d d b b f . 
        . . f f f f f f f f f f f f . . 
        `,img`
        . . . . . f c c c c f . . . . . 
        . . c c f b b d d b b f c c . . 
        . c b d d b b c c b b d d b c . 
        . f d c c c b c c b c c c d f . 
        f c b b c c b c c b c c b b c f 
        c d c c b c c c c c c b c c d c 
        c d c c c c c c c c c c c c d c 
        . f b b c c c c c c c c b b f . 
        . . f b b f f f f f f b b f . . 
        . . c c f 1 1 1 1 1 1 f c c . . 
        . c d f 1 1 1 1 1 1 1 1 f d c . 
        c d 1 1 f 1 1 1 1 1 1 f 1 1 d c 
        f d c c 1 f f 1 1 f f 1 c c d f 
        f b d c b b 1 f f 1 b b c d b f 
        . c b b d d b d d b d d b b c . 
        . . f f f f f f f f f f f f . . 
        `,img`
        . . . . . f c c c c f . . . . . 
        . . c c f b b d d b b f c c . . 
        . c b d d b b c c b b d d b c . 
        . f d c c c b c c b c c c d f . 
        f c b b c c b c c b c c b b c f 
        c d c c b c c c c c c b c c d c 
        c d c c c c c c c c c c c c d c 
        . f b b c c c c c c c c b b f . 
        . . f b b f f f f f f b b f . . 
        . . c c f 1 1 1 1 1 1 f c c . . 
        . c d f 1 1 1 1 1 1 1 1 f d c . 
        c d 1 1 f 1 1 1 1 1 1 f 1 1 d c 
        f d c c 1 f f 1 1 f f 1 c c d f 
        f b d c b b 1 f f 1 b b c d b f 
        . c b b d d b d d b d d b b c . 
        . . f f f f f f f f f f f f . . 
        `],
    500,
    true
    )
    貝殼.setPosition(630, 90)
    射手.setStayInScreen(true)
    鯊魚的血量 = statusbars.create(20, 4, StatusBarKind.鯊魚)
    鯊魚的血量.setColor(8, 2)
    魟魚的血量 = statusbars.create(20, 4, StatusBarKind.魟魚)
    魟魚的血量.setColor(8, 2)
    水母的血量 = statusbars.create(20, 4, StatusBarKind.水母)
    水母的血量.setColor(8, 2)
    龍的血量 = statusbars.create(40, 6, StatusBarKind.龍)
    龍的血量.setColor(8, 2)
    info.startCountdown(30)
    旗子.setPosition(630, 90)
    sprite.setPosition(0, 92)
    鯊魚 = sprites.create(img`
        ....................ffffff..............
        .................fffcccccf..............
        ................fccccccff...............
        ..........ffffffccccccf.................
        .......fffcccccccccccf..................
        .....ffcccccfccccccccff.................
        ....fccffccccfccfccccccff...............
        ...fccf2cccfccfccfcccccccff.............
        ..fcccccccffccfcccfccccccccff...........
        .fcccccccf1fccccccfccccccccccff.........
        fcccccfff3fccccccccccccccccccccf........
        .fffff133f1cccf1ccccccccccccccccf.ffffff
        ....fffff11ccccf11ffffffff1111cccfcccccf
        .....f11111fcccfff........ffff1ccccccff.
        ......ffffffcccf..............fccccff...
        ............fcccf.............fcccf.....
        .............ffcf.............fccf......
        ...............ff..............fcf......
        ...............................fcf......
        ................................ff......
        `, SpriteKind.鯊魚)
    animation.runImageAnimation(
    鯊魚,
    [img`
        ....................ffffff..............
        .................fffcccccf..............
        ................fccccccff...............
        ..........ffffffccccccf.................
        .......fffcccccccccccf..................
        .....ffcccccfccccccccff.................
        ....fccffccccfccfccccccff...............
        ...fccf2cccfccfccfcccccccff.............
        ..fcccccccffccfcccfccccccccff...........
        .fcccccccf1fccccccfccccccccccff.........
        fcccccfff3fccccccccccccccccccccf........
        .fffff133f1cccf1ccccccccccccccccf.ffffff
        ....fffff11ccccf11ffffffff1111cccfcccccf
        .....f11111fcccfff........ffff1ccccccff.
        ......ffffffcccf..............fccccff...
        ............fcccf.............fcccf.....
        .............ffcf.............fccf......
        ...............ff..............fcf......
        ...............................fcf......
        ................................ff......
        `,img`
        ....................ffffff..............
        .................fffcccccf..............
        ................fccccccff...............
        ....ffffffffffffccccccf.................
        ..ffcccccccccccccccccf..................
        .ffcccccffccfccccccccff.................
        .1ffcccf2ccccfccfccccccff...............
        ..1ffccccccfccfccfcccccccff.............
        ..1.1fffcccfccfcccfccccccccf............
        ......ccfccfccccccfcccccccccff..........
        ...1.1.ffcccccccccccccccccccccf.fffffff.
        ..11ffffccccccf1cccccccccccccccfccccccf.
        ..fff111111ccccf11ffffffff111cccccccff..
        ..f111ffffffcccfff........fff1ccccff....
        ...ffff....fcccf.............fcccf......
        ............fcccf............fccf.......
        .............ffcf............fccf.......
        ...............ff.............fcf.......
        ..............................fcf.......
        ...............................ff.......
        `,img`
        ....................ffffff..............
        .................fffcccccf..............
        ................fccccccff...............
        ..........ffffffccccccf.................
        .........fcccccccccccf..................
        ......ffffccfccccccccff.................
        .....fcccccccfccfccccccff...............
        ....fccffccfccfccfcccccccff.............
        ...fccf2ccffccfcccfccccccccff...........
        ..fcccccccffccccccfccccccccccff.........
        ffcccccccffccccccccccccccccccccf........
        fcccccccff1cccf1ccccccccccccccccf.ffffff
        .ffffffff11ccccf11ffffffff1111cccfcccccf
        .....f11111fcccfff........ffff1ccccccff.
        ......ffffffcccf..............fccccff...
        ............fcccf.............fcccf.....
        .............ffcf.............fccf......
        ...............ff..............fcf......
        ...............................fcf......
        ................................ff......
        `],
    200,
    true
    )
    鯊魚.follow(射手, 30)
    鯊魚的血量.attachToSprite(鯊魚, 3, 0)
    鯊魚.setPosition(randint(70, 380), randint(92, 30))
    魟魚 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . f b b b b f . . . . . . . 
        . . f b b b b b b f f . . . . . 
        . f b b b b b b b b b f . . . . 
        f b b 2 b b b b b b b b f f f f 
        . f b b b b b b b b b b b b b f 
        f b b 2 b b b b b b b b f f f f 
        . f b b b b b b b b b f . . . . 
        . . f b b b b b b f f . . . . . 
        . . . f b b b b f . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.魟魚)
    animation.runImageAnimation(
    魟魚,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . f b b b b f . . . . . . . 
        . . f b b b b b b f f . . . . . 
        . f b b b b b b b b b f . . . . 
        f b b 2 b b b b b b b b f f f f 
        . f b b b b b b b b b b b b b f 
        f b b 2 b b b b b b b b f f f f 
        . f b b b b b b b b b f . . . . 
        . . f b b b b b b f f . . . . . 
        . . . f b b b b f . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . f b b b b f . . . . . . . 
        . . f b b b b b b f f . . . f f 
        . f b b b b b b b b b f . f b f 
        f b b 2 b b b b b b b b f b f . 
        . f b b b b b b b b b b b b f . 
        f b b 2 b b b b b b b b f f . . 
        . f b b b b b b b b b f . . . . 
        . . f b b b b b b f f . . . . . 
        . . . f b b b b f . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . f b b b b f . . . . . . . 
        . . f b b b b b b f f . . . . . 
        . f b b b b b b b b b f . . . . 
        f b b 2 b b b b b b b b f f . . 
        . f b b b b b b b b b b b b f . 
        f b b 2 b b b b b b b b f b f . 
        . f b b b b b b b b b f . f b f 
        . . f b b b b b b f f . . . f f 
        . . . f b b b b f . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
    魟魚.follow(射手, 30)
    魟魚的血量.attachToSprite(魟魚, 3, 0)
    魟魚.setPosition(randint(70, 380), randint(92, 30))
    水母 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.水母)
    animation.runImageAnimation(
    水母,
    [img`
        . . . . . f f f f f . . . . . . 
        . . . . f 3 3 3 3 3 f . . . . . 
        . . . f 3 3 3 3 3 3 3 f . . . . 
        . . f f 3 3 3 3 3 3 3 f f . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f f f f f f f f f f f . . . 
        . . . f . f f . f . . f . . . . 
        . . f f . f . . f . . f f . . . 
        . . f . . f . . f f . . f . . . 
        . . f . . f . . . f . . f . . . 
        . . f . . f . . . f . . f . . . 
        . . f f . f f . . f . . f f . . 
        . . . f . . f . . . . . . f . . 
        . . . . . . f . . . . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 3 3 3 3 3 f . . . . . 
        . . . f 3 3 3 3 3 3 3 f . . . . 
        . . f f 3 3 3 3 3 3 3 f f . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f f f f f f f f f f f . . . 
        . . . f . . f . . f . . f . . . 
        . . . f f . f . . f . f f . . . 
        . . . . f . f . f f . f . . . . 
        . . . . f . f . f . . f . . . . 
        . . . . f . f . f . . f . . . . 
        . . . f f f f . f f . f f f . . 
        . . . f . f . . . . . . . f . . 
        . . . . . f . . . . . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 3 3 3 3 3 f . . . . . 
        . . . f 3 3 3 3 3 3 3 f . . . . 
        . . f f 3 3 3 3 3 3 3 f f . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f f f f f f f f f f f . . . 
        . . . f . . f . . f . . f . . . 
        . . . f f . f . . f . f f . . . 
        . . . . f . f . f f . f . . . . 
        . . . . f . f . f . . f . . . . 
        . . . . f . f . f . . f . . . . 
        . . . f f f f . f f . f f f . . 
        . . . f . f . . . . . . . f . . 
        . . . . . f . . . . . . . . . . 
        `],
    200,
    true
    )
    水母.follow(射手, 30)
    水母的血量.attachToSprite(水母, 3, 0)
    水母.setPosition(randint(70, 380), randint(92, 30))
    龍 = sprites.create(img`
        ...............ffffff...
        ..............f88888f...
        .......f..f..f88888f8f..
        ......f..f..f888fff.ff..
        .....f..f...f88ff8f.....
        .....fffff..f8ff888f....
        .....f8888f.ff88888f....
        ....ff28288ff888888ff...
        ....f8888888fffff888ff..
        ....fffff8888f...ff88f..
        ........fd8888f....fff..
        ......ffffd8888f........
        .....f888fd88888fff...ff
        ....f8f8fffd8888888fff8f
        ....f1f1f..fdd888888888f
        .....f.f..f8888f888888ff
        ..........f8888f888f88f.
        ..........f88ff.f888ff..
        ...........f8f..f88f....
        ...........f8f...f8f....
        ..........f18f..f18f....
        ..........ffff..ffff....
        ........................
        ........................
        `, SpriteKind.龍)
    animation.runImageAnimation(
    龍,
    [img`
        ...............ffffff...
        ..............f88888f...
        .......f..f..f88888f8f..
        ......f..f..f888fff.ff..
        .....f..f...f88ff8f.....
        .....fffff..f8ff888f....
        .....f8888f.ff88888f....
        ....ff28288ff888888ff...
        ....f8888888fffff888ff..
        ....fffff8888f...ff88f..
        ........fd8888f....fff..
        ......ffffd8888f........
        .....f888fd88888fff...ff
        ....f8f8fffd8888888fff8f
        ....f1f1f..fdd888888888f
        .....f.f..f8888f888888ff
        ..........f8888f888f88f.
        ..........f88ff.f888ff..
        ...........f8f..f88f....
        ...........f8f...f8f....
        ..........f18f..f18f....
        ..........ffff..ffff....
        ........................
        ........................
        `,img`
        ...............ffffff...
        ..............f88888f...
        .......f..f..f88888f8f..
        ......f..f..f888fff.ff..
        .....f..f...f88ff8f.....
        .....fffff..f8ff888f....
        .....f8888f.ff88888f....
        .99.ff28288ff888888ff...
        9999f8888888fffff888ff..
        9999fffff8888f...ff88f..
        99999191fd8888f....fff..
        9999ffffffd8888f........
        9999.f888fd88888fff...ff
        .99.f8f8fffd8888888fff8f
        ....f1f1f..fdd888888888f
        .....f.f..f8888f888888ff
        ..........f8888f888f88f.
        ..........f88ff.f888ff..
        ...........f8f..f88f....
        ...........f8f...f8f....
        ..........f18f..f18f....
        ..........ffff..ffff....
        ........................
        ........................
        `],
    500,
    true
    )
    龍.follow(射手, 50)
    龍的血量.attachToSprite(龍, 3, 0)
    龍.setPosition(380, 92)
    金幣 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . f 5 5 f . . . . . f 5 5 f . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.金幣6)
    金幣.setPosition(randint(70, 380), 92)
    元寶 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . f f f . f 5 5 f . f f f . 
        . . . f 5 5 f 5 5 5 5 f 5 5 f . 
        . . . f 5 5 5 f f f f 5 5 5 f . 
        . . . f f 5 5 5 5 5 5 5 5 f f . 
        . . . . f 5 5 5 5 5 5 5 5 f . . 
        . . . . f f 5 5 5 5 5 5 f f . . 
        . . . . . f f 5 5 5 5 f f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.元寶6)
    元寶.setPosition(randint(70, 380), 92)
    寶箱 = sprites.create(img`
        . . f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e e f . 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 5 e e e e e e e e e e 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f f f f f f f d d f f f f f f f 
        c f f f f f f c c f f f f f f c 
        c c c c c c f c c f c c c c c c 
        f 5 5 5 5 5 c f f c 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f c 5 5 5 5 5 5 5 5 5 5 5 5 c f 
        f f f f f f f f f f f f f f f f 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.寶箱3)
    寶箱.setPosition(randint(280, 380), 92)
    射手.setKind(SpriteKind.射手6)
})
sprites.onOverlap(SpriteKind.槍手1, SpriteKind.生命, function (sprite, otherSprite) {
    music.powerUp.play()
    otherSprite.destroy()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.play射手, SpriteKind.老虎, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    老虎的血量.value += -50
})
sprites.onOverlap(SpriteKind.魔法師5, SpriteKind.鯊魚, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.魔法師3, SpriteKind.螳螂, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.play劍士, SpriteKind.螳螂, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    螳螂的血量.value += -100
})
sprites.onOverlap(SpriteKind.play槍手, SpriteKind.含羞草, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    含羞草的血量.value += -20
})
sprites.onOverlap(SpriteKind.劍士1, SpriteKind.元寶, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.play槍手, SpriteKind.蜘蛛, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    蜘蛛的血量.value += -20
})
sprites.onOverlap(SpriteKind.劍士3, SpriteKind.生命3, function (sprite, otherSprite) {
    music.powerUp.play()
    otherSprite.destroy()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.能量2, SpriteKind.殭屍, function (sprite, otherSprite) {
    sprite.destroy()
    殭屍的血量.value += -20
})
sprites.onOverlap(SpriteKind.槍手3, SpriteKind.蜘蛛, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.play槍手, SpriteKind.食人花, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    食人花的血量.value += -20
})
sprites.onOverlap(SpriteKind.魔法師6, SpriteKind.元寶6, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.槍手4, SpriteKind.旗子4, function (sprite, otherSprite) {
    tiles.setTilemap(tilemap`層級31`)
    槍手.setStayInScreen(true)
    鯊魚的血量 = statusbars.create(20, 4, StatusBarKind.鯊魚)
    鯊魚的血量.setColor(8, 2)
    魟魚的血量 = statusbars.create(20, 4, StatusBarKind.魟魚)
    魟魚的血量.setColor(8, 2)
    水母的血量 = statusbars.create(20, 4, StatusBarKind.水母)
    水母的血量.setColor(8, 2)
    info.startCountdown(30)
    旗子.setPosition(630, 90)
    sprite.setPosition(0, 92)
    鯊魚 = sprites.create(img`
        ....................ffffff..............
        .................fffcccccf..............
        ................fccccccff...............
        ..........ffffffccccccf.................
        .......fffcccccccccccf..................
        .....ffcccccfccccccccff.................
        ....fccffccccfccfccccccff...............
        ...fccf2cccfccfccfcccccccff.............
        ..fcccccccffccfcccfccccccccff...........
        .fcccccccf1fccccccfccccccccccff.........
        fcccccfff3fccccccccccccccccccccf........
        .fffff133f1cccf1ccccccccccccccccf.ffffff
        ....fffff11ccccf11ffffffff1111cccfcccccf
        .....f11111fcccfff........ffff1ccccccff.
        ......ffffffcccf..............fccccff...
        ............fcccf.............fcccf.....
        .............ffcf.............fccf......
        ...............ff..............fcf......
        ...............................fcf......
        ................................ff......
        `, SpriteKind.鯊魚)
    animation.runImageAnimation(
    鯊魚,
    [img`
        ....................ffffff..............
        .................fffcccccf..............
        ................fccccccff...............
        ..........ffffffccccccf.................
        .......fffcccccccccccf..................
        .....ffcccccfccccccccff.................
        ....fccffccccfccfccccccff...............
        ...fccf2cccfccfccfcccccccff.............
        ..fcccccccffccfcccfccccccccff...........
        .fcccccccf1fccccccfccccccccccff.........
        fcccccfff3fccccccccccccccccccccf........
        .fffff133f1cccf1ccccccccccccccccf.ffffff
        ....fffff11ccccf11ffffffff1111cccfcccccf
        .....f11111fcccfff........ffff1ccccccff.
        ......ffffffcccf..............fccccff...
        ............fcccf.............fcccf.....
        .............ffcf.............fccf......
        ...............ff..............fcf......
        ...............................fcf......
        ................................ff......
        `,img`
        ....................ffffff..............
        .................fffcccccf..............
        ................fccccccff...............
        ....ffffffffffffccccccf.................
        ..ffcccccccccccccccccf..................
        .ffcccccffccfccccccccff.................
        .1ffcccf2ccccfccfccccccff...............
        ..1ffccccccfccfccfcccccccff.............
        ..1.1fffcccfccfcccfccccccccf............
        ......ccfccfccccccfcccccccccff..........
        ...1.1.ffcccccccccccccccccccccf.fffffff.
        ..11ffffccccccf1cccccccccccccccfccccccf.
        ..fff111111ccccf11ffffffff111cccccccff..
        ..f111ffffffcccfff........fff1ccccff....
        ...ffff....fcccf.............fcccf......
        ............fcccf............fccf.......
        .............ffcf............fccf.......
        ...............ff.............fcf.......
        ..............................fcf.......
        ...............................ff.......
        `,img`
        ....................ffffff..............
        .................fffcccccf..............
        ................fccccccff...............
        ..........ffffffccccccf.................
        .........fcccccccccccf..................
        ......ffffccfccccccccff.................
        .....fcccccccfccfccccccff...............
        ....fccffccfccfccfcccccccff.............
        ...fccf2ccffccfcccfccccccccff...........
        ..fcccccccffccccccfccccccccccff.........
        ffcccccccffccccccccccccccccccccf........
        fcccccccff1cccf1ccccccccccccccccf.ffffff
        .ffffffff11ccccf11ffffffff1111cccfcccccf
        .....f11111fcccfff........ffff1ccccccff.
        ......ffffffcccf..............fccccff...
        ............fcccf.............fcccf.....
        .............ffcf.............fccf......
        ...............ff..............fcf......
        ...............................fcf......
        ................................ff......
        `],
    200,
    true
    )
    鯊魚.follow(槍手, 30)
    鯊魚的血量.attachToSprite(鯊魚, 3, 0)
    鯊魚.setPosition(randint(70, 380), randint(92, 30))
    魟魚 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . f b b b b f . . . . . . . 
        . . f b b b b b b f f . . . . . 
        . f b b b b b b b b b f . . . . 
        f b b 2 b b b b b b b b f f f f 
        . f b b b b b b b b b b b b b f 
        f b b 2 b b b b b b b b f f f f 
        . f b b b b b b b b b f . . . . 
        . . f b b b b b b f f . . . . . 
        . . . f b b b b f . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.魟魚)
    animation.runImageAnimation(
    魟魚,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . f b b b b f . . . . . . . 
        . . f b b b b b b f f . . . . . 
        . f b b b b b b b b b f . . . . 
        f b b 2 b b b b b b b b f f f f 
        . f b b b b b b b b b b b b b f 
        f b b 2 b b b b b b b b f f f f 
        . f b b b b b b b b b f . . . . 
        . . f b b b b b b f f . . . . . 
        . . . f b b b b f . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . f b b b b f . . . . . . . 
        . . f b b b b b b f f . . . f f 
        . f b b b b b b b b b f . f b f 
        f b b 2 b b b b b b b b f b f . 
        . f b b b b b b b b b b b b f . 
        f b b 2 b b b b b b b b f f . . 
        . f b b b b b b b b b f . . . . 
        . . f b b b b b b f f . . . . . 
        . . . f b b b b f . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . f b b b b f . . . . . . . 
        . . f b b b b b b f f . . . . . 
        . f b b b b b b b b b f . . . . 
        f b b 2 b b b b b b b b f f . . 
        . f b b b b b b b b b b b b f . 
        f b b 2 b b b b b b b b f b f . 
        . f b b b b b b b b b f . f b f 
        . . f b b b b b b f f . . . f f 
        . . . f b b b b f . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
    魟魚.follow(槍手, 30)
    魟魚的血量.attachToSprite(魟魚, 3, 0)
    魟魚.setPosition(randint(70, 380), randint(92, 30))
    水母 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.水母)
    animation.runImageAnimation(
    水母,
    [img`
        . . . . . f f f f f . . . . . . 
        . . . . f 3 3 3 3 3 f . . . . . 
        . . . f 3 3 3 3 3 3 3 f . . . . 
        . . f f 3 3 3 3 3 3 3 f f . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f f f f f f f f f f f . . . 
        . . . f . f f . f . . f . . . . 
        . . f f . f . . f . . f f . . . 
        . . f . . f . . f f . . f . . . 
        . . f . . f . . . f . . f . . . 
        . . f . . f . . . f . . f . . . 
        . . f f . f f . . f . . f f . . 
        . . . f . . f . . . . . . f . . 
        . . . . . . f . . . . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 3 3 3 3 3 f . . . . . 
        . . . f 3 3 3 3 3 3 3 f . . . . 
        . . f f 3 3 3 3 3 3 3 f f . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f f f f f f f f f f f . . . 
        . . . f . . f . . f . . f . . . 
        . . . f f . f . . f . f f . . . 
        . . . . f . f . f f . f . . . . 
        . . . . f . f . f . . f . . . . 
        . . . . f . f . f . . f . . . . 
        . . . f f f f . f f . f f f . . 
        . . . f . f . . . . . . . f . . 
        . . . . . f . . . . . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 3 3 3 3 3 f . . . . . 
        . . . f 3 3 3 3 3 3 3 f . . . . 
        . . f f 3 3 3 3 3 3 3 f f . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f f f f f f f f f f f . . . 
        . . . f . . f . . f . . f . . . 
        . . . f f . f . . f . f f . . . 
        . . . . f . f . f f . f . . . . 
        . . . . f . f . f . . f . . . . 
        . . . . f . f . f . . f . . . . 
        . . . f f f f . f f . f f f . . 
        . . . f . f . . . . . . . f . . 
        . . . . . f . . . . . . . . . . 
        `],
    200,
    true
    )
    水母.follow(槍手, 30)
    水母的血量.attachToSprite(水母, 3, 0)
    水母.setPosition(randint(70, 380), randint(92, 30))
    金幣 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . f 5 5 f . . . . . f 5 5 f . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.金幣5)
    金幣.setPosition(randint(70, 380), 92)
    元寶 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . f f f . f 5 5 f . f f f . 
        . . . f 5 5 f 5 5 5 5 f 5 5 f . 
        . . . f 5 5 5 f f f f 5 5 5 f . 
        . . . f f 5 5 5 5 5 5 5 5 f f . 
        . . . . f 5 5 5 5 5 5 5 5 f . . 
        . . . . f f 5 5 5 5 5 5 f f . . 
        . . . . . f f 5 5 5 5 f f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.元寶5)
    元寶.setPosition(randint(70, 380), 92)
    寶箱 = sprites.create(img`
        . . f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e e f . 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 5 e e e e e e e e e e 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f f f f f f f d d f f f f f f f 
        c f f f f f f c c f f f f f f c 
        c c c c c c f c c f c c c c c c 
        f 5 5 5 5 5 c f f c 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f c 5 5 5 5 5 5 5 5 5 5 5 5 c f 
        f f f f f f f f f f f f f f f f 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.寶箱2)
    寶箱.setPosition(randint(280, 380), 92)
    生命 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . f f . . . . 
        . . . . f 2 2 f . f 2 2 f . . . 
        . . . f 2 2 2 2 f 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . . f 2 2 2 2 2 2 2 f . . . 
        . . . . . f 2 2 2 2 2 f . . . . 
        . . . . . . f 2 2 2 f . . . . . 
        . . . . . . . f 2 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.生命5)
    生命.setPosition(randint(70, 380), 92)
    旗子.setKind(SpriteKind.旗子5)
    槍手.setKind(SpriteKind.槍手5)
})
sprites.onOverlap(SpriteKind.魔法師2, SpriteKind.金幣2, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.能量2, SpriteKind.狼, function (sprite, otherSprite) {
    sprite.destroy()
    狼的血量.value += -20
})
sprites.onOverlap(SpriteKind.劍士3, SpriteKind.螳螂, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.射手2, SpriteKind.蟒蛇, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.槍手4, SpriteKind.生命4, function (sprite, otherSprite) {
    music.powerUp.play()
    otherSprite.destroy()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.魔法師2, SpriteKind.生命2, function (sprite, otherSprite) {
    music.powerUp.play()
    otherSprite.destroy()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.play魔法師, SpriteKind.狼, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    狼的血量.value += -30
})
sprites.onOverlap(SpriteKind.劍士4, SpriteKind.向日葵, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.射手2, SpriteKind.元寶2, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.能量1, SpriteKind.螳螂, function (sprite, otherSprite) {
    sprite.destroy()
    螳螂的血量.value += -20
})
sprites.onOverlap(SpriteKind.射手4, SpriteKind.元寶4, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.槍手3, SpriteKind.元寶3, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.劍士1, SpriteKind.殭屍, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.能量3, SpriteKind.龍, function (sprite, otherSprite) {
    sprite.destroy()
    龍的血量.value += -5
})
sprites.onOverlap(SpriteKind.play射手, SpriteKind.殭屍, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    殭屍的血量.value += -50
})
sprites.onOverlap(SpriteKind.能量4, SpriteKind.鬼怪, function (sprite, otherSprite) {
    sprite.destroy()
    鬼怪的血量.value += -20
})
sprites.onOverlap(SpriteKind.槍手1, SpriteKind.鬼怪, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.魔法師6, SpriteKind.水母, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.射手1, SpriteKind.金幣, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.魔法師1, SpriteKind.金幣, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.play射手, SpriteKind.蜘蛛, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    蜘蛛的血量.value += -50
})
sprites.onOverlap(SpriteKind.play射手, SpriteKind.螳螂, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    螳螂的血量.value += -50
})
statusbars.onZero(StatusBarKind.鯊魚, function (status) {
    鯊魚.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.能量1, SpriteKind.鬼怪, function (sprite, otherSprite) {
    sprite.destroy()
    鬼怪的血量.value += -20
})
sprites.onOverlap(SpriteKind.魔法師2, SpriteKind.老虎, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.能量1, SpriteKind.含羞草, function (sprite, otherSprite) {
    sprite.destroy()
    含羞草的血量.value += -20
})
sprites.onOverlap(SpriteKind.魔法師3, SpriteKind.金幣3, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.槍手4, SpriteKind.寶箱, function (sprite, otherSprite) {
    music.jumpUp.play()
    otherSprite.destroy()
    info.changeScoreBy(3)
})
sprites.onOverlap(SpriteKind.劍士1, SpriteKind.生命, function (sprite, otherSprite) {
    music.powerUp.play()
    otherSprite.destroy()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.play射手, SpriteKind.魟魚, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    魟魚的血量.value += -50
})
sprites.onOverlap(SpriteKind.魔法師6, SpriteKind.鯊魚, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.play魔法師, SpriteKind.蜘蛛, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    蜘蛛的血量.value += -30
})
sprites.onOverlap(SpriteKind.魔法師3, SpriteKind.元寶3, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(2)
})
controller.combos.attachCombo("BU", function () {
    music.pewPew.play()
    animation.runImageAnimation(
    魔法師,
    [img`
        ........ffff......................
        ......ffccccff....................
        .....fccccccccf...................
        ....fcccccccccf...................
        ....ffffcccccccf..................
        .......fccccccccffff..............
        ......fccccccccccccf..............
        .....ffccccccccccff...............
        ....ffcccccccffff.................
        ....fccccffffdddf..fff............
        .....ffffd1fd1fdf..fa.............
        .......ffd1fd1fdf..ff.............
        ......fffdddddddff..f.............
        ......ffffffffffff..f.............
        ........fcccfccf....f.............
        ........fcccfccfbbbdf.............
        .......ffccfbfcff...f.............
        .....fffcccfbfccfff.f.............
        ....ffccccfbbbfcccf.f.............
        ....fccccfbbbbbfcff.f.............
        ....ffffffffffffff................
        ........fff.fff...................
        ........ff..ff....................
        ..................................
        `,img`
        ........ffff......................
        ......ffccccff....................
        .....fccccccccf...................
        ....fcccccccccf...................
        ....ffffcccccccf..................
        .......fccccccccffff..............
        ......fccccccccccccf..............
        .....ffccccccccccff...............
        ....ffcccccccffff.................
        ....fccccffffdddf..fff............
        .....ffffd1fd1fdf..fa.............
        .......ffd1fd1fdf..ff.............
        ......fffdddddddff..f.............
        ......ffffffffffff..f.............
        ........fcccfccf....f.............
        ........fcccfccfbbbdf.............
        .......ffccfbfcff...f.............
        .....fffcccfbfccfff.f.............
        ....ffccccfbbbfcccf.f.............
        ....fccccfbbbbbfcff.f.............
        ....ffffffffffffff................
        ..........fff.....................
        ..........fff.....................
        ..................................
        `,img`
        ........ffff......................
        ......ffccccff....................
        .....fccccccccf...................
        ....fcccccccccf...................
        ....ffffcccccccf..................
        .......fccccccccffff..............
        ......fccccccccccccf..............
        .....ffccccccccccff...............
        ....ffcccccccffff.................
        ....fccccffffdddf.................
        .....ffffd1fd1fdf.................
        .......ffd1fd1fdf.................
        ......fffdddddddff................
        ......ffffffffffff................
        ........fcccfccf.........fff......
        ........fcccfccfbbbdffffffaf......
        .......ffccfbfcff..........f......
        .....fffcccfbfccfff...............
        ....ffccccfbbbfcccf...............
        ....fccccfbbbbbfcff...............
        ....ffffffffffffff................
        ..........fff.....................
        ..........fff.....................
        ..................................
        `,img`
        ........ffff......................
        ......ffccccff....................
        .....fccccccccf...................
        ....fcccccccccf...................
        ....ffffcccccccf..................
        .......fccccccccffff..............
        ......fccccccccccccf..............
        .....ffccccccccccff...............
        ....ffcccccccffff.................
        ....fccccffffdddf.................
        .....ffffd1fd1fdf.................
        .......ffd1fd1fdf.................
        ......fffdddddddff................
        ......ffffffffffff................
        ........fcccfccf.........fff......
        ........fcccfccfbbbdffffffaf......
        .......ffccfbfcff..........f......
        .....fffcccfbfccfff...............
        ....ffccccfbbbfcccf...............
        ....fccccfbbbbbfcff...............
        ....ffffffffffffff................
        ........fff.fff...................
        ........ff..ff....................
        ..................................
        `,img`
        ........ffff......................
        ......ffccccff....................
        .....fccccccccf...................
        ....fcccccccccf...................
        ....ffffcccccccf..................
        .......fccccccccffff..............
        ......fccccccccccccf..............
        .....ffccccccccccff...............
        ....ffcccccccffff.................
        ....fccccffffdddf..fff............
        .....ffffd1fd1fdf..fa.............
        .......ffd1fd1fdf..ff.............
        ......fffdddddddff..f.............
        ......ffffffffffff..f.............
        ........fcccfccf....f.............
        ........fcccfccfbbbdf.............
        .......ffccfbfcff...f.............
        .....fffcccfbfccfff.f.............
        ....ffccccfbbbfcccf.f.............
        ....fccccfbbbbbfcff.f.............
        ....ffffffffffffff................
        ........fff.fff...................
        ........ff..ff....................
        ..................................
        `],
    100,
    false
    )
    能量3 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . a a a . . . . . . . 
        . . . . . a a a a a . . . . . . 
        . . . . . a a . a a . . . . . . 
        . . . . . a a a a a . . . . . . 
        . . . . . . a a a . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 魔法師, 50, 0)
    能量3.setKind(SpriteKind.能量3)
    能量3.setFlag(SpriteFlag.AutoDestroy, true)
    pause(100)
})
sprites.onOverlap(SpriteKind.魔法師4, SpriteKind.生命4, function (sprite, otherSprite) {
    music.powerUp.play()
    otherSprite.destroy()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.射手1, SpriteKind.蝙蝠, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.play劍士, SpriteKind.含羞草, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    含羞草的血量.value += -100
})
sprites.onOverlap(SpriteKind.能量2, SpriteKind.魟魚, function (sprite, otherSprite) {
    sprite.destroy()
    魟魚的血量.value += -20
})
sprites.onOverlap(SpriteKind.能量3, SpriteKind.鬼怪, function (sprite, otherSprite) {
    sprite.destroy()
    鬼怪的血量.value += -20
})
sprites.onOverlap(SpriteKind.劍士3, SpriteKind.蜘蛛, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.射手1, SpriteKind.鬼怪, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.劍士6, SpriteKind.寶箱3, function (sprite, otherSprite) {
    music.jumpUp.play()
    otherSprite.destroy()
    info.changeScoreBy(3)
})
controller.combos.attachCombo("AU", function () {
    music.pewPew.play()
    animation.runImageAnimation(
    劍士,
    [img`
        ..............................
        .......fff.......fff..........
        ...ffff222f.....fccf..........
        ..f22222222f...fcccf..........
        .ffffffffffff.fcccf...........
        .fdddddddfffefcccf............
        ffdddd1fdddfeeccf.............
        fddddd1fdddffeef..............
        .fdddddddddfefeef.............
        ..fffffffffdf.ff..............
        ...f22f222df..................
        ...f22fffff...................
        ...f222222f...................
        ...ffffffff...................
        ...6666666....................
        ...ff..ff.....................
        ...fff.fff....................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `,img`
        ..............................
        .......fff....................
        ...ffff222f...................
        ..f22222222f..................
        .fffffffffff..................
        .fdddddddfff..................
        ffdddd1fdddf..................
        fddddd1fdddf..ff..............
        .fdddddddddf.feef.............
        ..ffffffffffffefffffffff......
        ...f22f222fddeeccccccccf......
        ...f22ffffffffefffffffff......
        ...f222222f..feef.............
        ...ffffffff...ff..............
        ...6666666....................
        .....fff......................
        .....fff......................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `,img`
        ..............................
        .......fff....................
        ...ffff222f........fff........
        ..f22222222f......fccf........
        .fffffffffff.....fcccf........
        .fdddddddfff....fcccf.........
        ffdddd1fdddf.f.fcccf..........
        fddddd1fdddffefcccf...........
        .fdddddddddffeeccf............
        ..ffffffffffffeef.............
        ...f22f222fddefeef............
        ...f22ffffffff.ff.............
        ...f222222f...................
        ...ffffffff...................
        ...666.666....................
        ...ff..ff.....................
        ...fff.fff....................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `],
    100,
    false
    )
    能量1 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . . 5 5 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 劍士, 50, 0)
    能量1.setKind(SpriteKind.能量1)
    能量1.setFlag(SpriteFlag.AutoDestroy, true)
    pause(100)
})
sprites.onOverlap(SpriteKind.魔法師5, SpriteKind.寶箱2, function (sprite, otherSprite) {
    music.jumpUp.play()
    otherSprite.destroy()
    info.changeScoreBy(3)
})
sprites.onOverlap(SpriteKind.射手3, SpriteKind.元寶3, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.射手5, SpriteKind.水母, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
statusbars.onZero(StatusBarKind.向日葵, function (status) {
    向日葵.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.能量2, SpriteKind.含羞草, function (sprite, otherSprite) {
    sprite.destroy()
    含羞草的血量.value += -20
})
sprites.onOverlap(SpriteKind.play魔法師, SpriteKind.殭屍, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    殭屍的血量.value += -30
})
sprites.onOverlap(SpriteKind.射手6, SpriteKind.魟魚, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.槍手6, SpriteKind.鯊魚, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.槍手3, SpriteKind.金幣3, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.槍手1, SpriteKind.蝙蝠, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.射手6, SpriteKind.貝殼, function (sprite, otherSprite) {
    射手.setKind(SpriteKind.射手7)
    game.over(true)
})
sprites.onOverlap(SpriteKind.劍士4, SpriteKind.含羞草, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.槍手2, SpriteKind.旗子2, function (sprite, otherSprite) {
    tiles.setTilemap(tilemap`層級22`)
    槍手.setStayInScreen(true)
    蜘蛛的血量 = statusbars.create(20, 4, StatusBarKind.蜘蛛)
    蜘蛛的血量.setColor(8, 2)
    螳螂的血量 = statusbars.create(20, 4, StatusBarKind.螳螂)
    螳螂的血量.setColor(8, 2)
    蜜蜂的血量 = statusbars.create(20, 4, StatusBarKind.蜜蜂)
    蜜蜂的血量.setColor(8, 2)
    info.startCountdown(30)
    旗子.setPosition(630, 90)
    sprite.setPosition(0, 92)
    蜘蛛 = sprites.create(img`
        . . f . . . . . . . f . . . . . 
        . . . f f . . . . f . . . f . . 
        . . . . . f . . f . . f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . f f f f f f . f f f . . . 
        . . f . . . f f f f f f f f . . 
        . . . . . f 2 f f f f f f f f . 
        . . . . . . f f f f f f f f f . 
        . . . . . f 2 f f f f f f f f . 
        . . f . . . f f f f f f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . f . . f . . f f . . . 
        . . . f f . . . . f . . . f . . 
        . . f . . . . . . . f . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.蜘蛛)
    animation.runImageAnimation(
    蜘蛛,
    [img`
        . . f . . . . . . . f . . . . . 
        . . . f f . . . . f . . . f . . 
        . . . . . f . . f . . f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . f f f f f f . f f f . . . 
        . . f . . . f f f f f f f f . . 
        . . . . . f 2 f f f f f f f f . 
        . . . . . . f f f f f f f f f . 
        . . . . . f 2 f f f f f f f f . 
        . . f . . . f f f f f f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . f . . f . . f f . . . 
        . . . f f . . . . f . . . f . . 
        . . f . . . . . . . f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . f . . . . . . . f . . . . . 
        . . . f f . . . . f . . . f . . 
        . . . . . f . . f . . f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . f f f f f f . f f f . . . 
        . . f . . . f f f f f f f f . . 
        . . . . . f 2 f f f f f f f f . 
        . . . . . . f f f f f f f f f . 
        . . . . . f 2 f f f f f f f f . 
        . . f . . . f f f f f f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . . f . f . . f f . . . 
        . . . . . . . f . f . . . f . . 
        . . . . . . . f . . f . . . . . 
        . . . . . . . . f . . . . . . . 
        `,img`
        . . . . . . . . f . f . . . . . 
        . . . . . . . f . f . . . f . . 
        . . . . . . f . f . . f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . f f f f f f . f f f . . . 
        . . f . . . f f f f f f f f . . 
        . . . . . f 2 f f f f f f f f . 
        . . . . . . f f f f f f f f f . 
        . . . . . f 2 f f f f f f f f . 
        . . f . . . f f f f f f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . f . . f . . f f . . . 
        . . . f f . . . . f . . . f . . 
        . . f . . . . . . . f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . f . . . . . . . f . . . . . 
        . . . f f . . . . f . . . f . . 
        . . . . . f . . f . . f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . f f f f f f . f f f . . . 
        . . f . . . f f f f f f f f . . 
        . . . . . f 2 f f f f f f f f . 
        . . . . . . f f f f f f f f f . 
        . . . . . f 2 f f f f f f f f . 
        . . f . . . f f f f f f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . f . . f . . f f . . . 
        . . . f f . . f . . . . . f . . 
        . . f . . . f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . f . . . f . . . . . . . . . 
        . . . f f . . f . . . . . f . . 
        . . . . . f . . f . . f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . f f f f f f . f f f . . . 
        . . f . . . f f f f f f f f . . 
        . . . . . f 2 f f f f f f f f . 
        . . . . . . f f f f f f f f f . 
        . . . . . f 2 f f f f f f f f . 
        . . f . . . f f f f f f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . f . . f . . f f . . . 
        . . . f f . . . . f . . . f . . 
        . . f . . . . . . . f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . f . . . . . . . f . . . . . 
        . . . f f . . . . f . . . f . . 
        . . . . . f . . f . . f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . f f f f f f . f f f . . . 
        . . f . . . f f f f f f f f . . 
        . . . . . f 2 f f f f f f f f . 
        . . . . . . f f f f f f f f f . 
        . . . . . f 2 f f f f f f f f . 
        . . f . . . f f f f f f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . f . . f f . . . . . . 
        . . . f f . . f . f . . . . . . 
        . . f . . . . . . . f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . f . . . . . . . f . . . . . 
        . . . f f . . f . f . . . . . . 
        . . . . . f . . f f . . . . . . 
        . . . . . . f . f . f . . . . . 
        . . . f f f f f f . f f f . . . 
        . . f . . . f f f f f f f f . . 
        . . . . . f 2 f f f f f f f f . 
        . . . . . . f f f f f f f f f . 
        . . . . . f 2 f f f f f f f f . 
        . . f . . . f f f f f f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . f . . f . . f f . . . 
        . . . f f . . . . f . . . f . . 
        . . f . . . . . . . f . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
    蜘蛛.follow(槍手, 30)
    蜘蛛的血量.attachToSprite(蜘蛛, 3, 0)
    蜘蛛.setPosition(randint(70, 380), randint(92, 30))
    螳螂 = sprites.create(img`
        ....ff.ff...............
        .....fff................
        ....27772......f........
        ....f777f..f..ff........
        ..ff.f7f7f.f..ff........
        .f77f.ff77fff.ff........
        .f7fff.ff77fffff........
        .f7f7fffff77777fff......
        .f7f77ff7ff7777777f.....
        ..ff7777ff7ff777777f....
        ..ff7fff.f7f.f7ffffff...
        ...f7f..f7f.ff7f........
        ....f..f7f..f7f.........
        ....f..f7f..f7f.........
        .......f7f..f7f.........
        ........f....f..........
        `, SpriteKind.螳螂)
    animation.runImageAnimation(
    螳螂,
    [img`
        ....ff.ff...............
        .....fff................
        ....27772......f........
        ....f777f..f..ff........
        ..ff.f7f7f.f..ff........
        .f77f.ff77fff.ff........
        .f7fff.ff77fffff........
        .f7f7fffff77777fff......
        .f7f77ff7ff7777777f.....
        ..ff7777ff7ff777777f....
        ..ff7fff.f7f.f7ffffff...
        ...f7f..f7f.ff7f........
        ....f..f7f..f7f.........
        ....f..f7f..f7f.........
        .......f7f..f7f.........
        ........f....f..........
        `,img`
        ....ff.ff...............
        .....fff................
        ....27772......f........
        ....f777f..f..ff........
        ..ff.f7f7f.f..ff........
        .f77f.ff77fff.ff........
        .f7f7f..f77fffff........
        .f7f7fffff77777fff......
        .ff7ff7f.ff7777777f.....
        ..fff7f....ff777777f....
        ...f77f......ffffffff...
        ..f7fff......f77f.f7ff..
        ..fff........ff77f.f77f.
        ...f..........ff77f.ff7f
        ...f............ffff..ff
        ........f........ffff...
        `],
    500,
    true
    )
    螳螂.follow(魔法師, 30)
    螳螂的血量.attachToSprite(螳螂, 3, 0)
    螳螂.setPosition(randint(70, 380), 92)
    蜜蜂 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f . f f f . . . . 
        . f . . f f 1 f f f 1 1 f . . . 
        f 1 f . f 1 1 f 1 1 1 1 f . . . 
        . f f . f 1 1 f 1 1 1 f . . . . 
        . . f f f 1 1 f 1 1 1 f . . . . 
        . f 2 f 5 1 f 1 1 1 f f 5 . . . 
        . f 1 f 5 f 1 1 1 f 5 f 5 5 . . 
        . f f 5 5 f f f f 5 5 f 5 5 5 . 
        f . . . 5 f 5 5 f 5 5 f 5 5 . . 
        . . . . 5 f 5 5 f 5 5 f 5 . . . 
        . . . . . f 5 5 f 5 5 . f . . . 
        . . . . . . f 1 1 f . . . f . . 
        . . . . . . . f 1 1 f . . . . . 
        `, SpriteKind.蜜蜂)
    animation.runImageAnimation(
    蜜蜂,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f . f f f . . . . 
        . f . . f f 1 f f f 1 1 f . . . 
        f . f . f 1 1 f 1 1 1 1 f . . . 
        . f f . f 1 1 f 1 1 1 f . . . . 
        . . f f f 1 1 f 1 1 1 f . . . . 
        . f 2 f 5 1 f 1 1 1 f f 5 . . . 
        . f 1 f 5 f 1 1 1 f 5 f 5 5 . . 
        . f f 5 5 f f f f 5 5 f 5 5 5 f 
        f . . . 5 f 5 5 f 5 5 f 5 5 . . 
        . . . . 5 f 5 5 f 5 5 f 5 . . . 
        . . . . . f 5 5 f 5 5 . f . . . 
        . . . . . . f . . f . . . f . . 
        . . . . . . . f . . f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . f f f . . . . 
        . f . . . . . f f f 1 1 f . . . 
        f . f . . . . f 1 1 1 1 f . . . 
        . f f . . . . f 1 1 1 f . . . . 
        . . f f f . . f 1 1 1 f . . . . 
        . f 2 f 5 f f 1 1 1 f f 5 . . . 
        . f 1 f 5 f 1 1 1 f 5 f 5 5 . . 
        . f f 5 5 f f f f 5 5 f 5 5 5 . 
        f . . . 5 f 5 5 f 5 5 f 5 5 . . 
        . . . . 5 f 5 5 f 5 5 f 5 . . . 
        . . . . . f 5 5 f 5 5 . f . . . 
        . . . . . . f . . f . . . f . . 
        . . . . . . . f . . f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f . . . . . . . . 
        . f . . f f 1 f . . . . . . . . 
        f . f . f 1 1 f . . . . . . . . 
        . f f . f 1 1 f . . . . . . . . 
        . . f f f 1 1 f f f . . . . . . 
        . f 2 f 5 f f 1 1 1 f f 5 . . . 
        . f 1 f 5 f 1 1 1 1 f f 5 5 . . 
        . f f 5 5 f f 1 1 1 f f 5 5 5 . 
        f . . . 5 f 5 f 1 1 f f 5 5 . . 
        . . . . 5 f 5 f 1 1 1 f 5 . . . 
        . . . . . f 5 5 f f f . f . . . 
        . . . . . . f . . f . . . f . . 
        . . . . . . . f . . f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f . f f f . . . . . 
        . . . f 1 1 f f f 1 f f . . f . 
        . . . f 1 1 1 1 f 1 1 f . f . f 
        . . . . f 1 1 1 f 1 1 f . f f . 
        . . . . f 1 1 1 f 1 1 f f f . . 
        . . . 5 f f 1 1 1 f 1 5 f 2 f . 
        . . 5 5 f 5 f 1 1 1 f 5 f 1 f . 
        f 5 5 5 f 5 5 f f f f 5 5 f f . 
        . . 5 5 f 5 5 f 5 5 f 5 . . . f 
        . . . 5 f 5 5 f 5 5 f 5 . . . . 
        . . . f . 5 5 f 5 5 f . . . . . 
        . . f . . . f . . f . . . . . . 
        . . . . . f . . f . . . . . . . 
        `],
    200,
    true
    )
    蜜蜂.follow(槍手, 30)
    蜜蜂的血量.attachToSprite(蜜蜂, 3, 0)
    蜜蜂.setPosition(randint(70, 380), randint(92, 30))
    金幣 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . f 5 5 f . . . . . f 5 5 f . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.金幣3)
    金幣.setPosition(randint(70, 380), 92)
    元寶 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . f f f . f 5 5 f . f f f . 
        . . . f 5 5 f 5 5 5 5 f 5 5 f . 
        . . . f 5 5 5 f f f f 5 5 5 f . 
        . . . f f 5 5 5 5 5 5 5 5 f f . 
        . . . . f 5 5 5 5 5 5 5 5 f . . 
        . . . . f f 5 5 5 5 5 5 f f . . 
        . . . . . f f 5 5 5 5 f f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.元寶3)
    元寶.setPosition(randint(70, 380), 92)
    生命 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . f f . . . . 
        . . . . f 2 2 f . f 2 2 f . . . 
        . . . f 2 2 2 2 f 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . . f 2 2 2 2 2 2 2 f . . . 
        . . . . . f 2 2 2 2 2 f . . . . 
        . . . . . . f 2 2 2 f . . . . . 
        . . . . . . . f 2 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.生命3)
    生命.setPosition(randint(70, 380), 92)
    旗子.setKind(SpriteKind.旗子3)
    槍手.setKind(SpriteKind.槍手3)
})
sprites.onOverlap(SpriteKind.play劍士, SpriteKind.鬼怪, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    鬼怪的血量.value += -100
})
sprites.onOverlap(SpriteKind.能量2, SpriteKind.食人花, function (sprite, otherSprite) {
    sprite.destroy()
    食人花的血量.value += -20
})
sprites.onOverlap(SpriteKind.槍手2, SpriteKind.狼, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.槍手3, SpriteKind.生命3, function (sprite, otherSprite) {
    music.powerUp.play()
    otherSprite.destroy()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.player魔法師, SpriteKind.旗子, function (sprite, otherSprite) {
    tiles.setTilemap(tilemap`層級14`)
    魔法師.setStayInScreen(true)
    殭屍的血量 = statusbars.create(20, 4, StatusBarKind.殭屍)
    殭屍的血量.setColor(8, 2)
    鬼怪的血量 = statusbars.create(20, 4, StatusBarKind.鬼怪)
    鬼怪的血量.setColor(8, 2)
    蝙蝠的血量 = statusbars.create(20, 4, StatusBarKind.蝙蝠)
    蝙蝠的血量.setColor(8, 2)
    info.startCountdown(30)
    旗子.setPosition(630, 90)
    sprite.setPosition(0, 92)
    殭屍 = sprites.create(img`
        . . . f f f f f f f f . . . . . 
        . . f f f f f f f f 7 f . . . . 
        . f f 7 7 f 7 7 f 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . f 7 2 1 7 7 7 2 1 7 7 7 f . . 
        . f 7 1 1 f 7 f 1 1 7 7 7 f . . 
        . . f 7 7 7 7 7 7 7 7 7 f . . . 
        . . . f 2 1 2 1 2 2 7 f . . . . 
        . . . f 1 2 2 2 1 7 f f . . . . 
        . f f f f f f f f f f . . . . . 
        f 7 7 7 f c f 7 7 7 7 f . . . . 
        f 7 7 f f c f 7 7 7 7 f . . . . 
        f f f . f f f f f f f . . . . . 
        . . . f f c f f c c f . . . . . 
        . . . f 7 7 7 f 7 7 7 f . . . . 
        . . . f f f f f f f f f . . . . 
        `, SpriteKind.殭屍)
    animation.runImageAnimation(
    殭屍,
    [img`
        . . . f f f f f f f f . . . . . 
        . . f f f f f f f f 7 f . . . . 
        . f f 7 7 f 7 7 f 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . f 7 2 1 7 7 7 2 1 7 7 7 f . . 
        . f 7 1 1 f 7 f 1 1 7 7 7 f . . 
        . . f 7 7 7 7 7 7 7 7 7 f . . . 
        . . . f 2 1 2 1 2 2 7 f . . . . 
        . . . f 1 2 2 2 1 7 f f . . . . 
        . f f f f f f f f f f . . . . . 
        f 7 7 7 f c f 7 7 7 7 f . . . . 
        f 7 7 f f c f 7 7 7 7 f . . . . 
        f f f . f f f f f f f . . . . . 
        . . . f f c f f c c f . . . . . 
        . . . f 7 7 7 f 7 7 7 f . . . . 
        . . . f f f f f f f f f . . . . 
        `,img`
        . . . f f f f f f f f . . . . . 
        . . f f f f f f f f 7 f . . . . 
        . f f 7 7 f 7 7 f 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . f 7 2 1 7 7 7 2 1 7 7 7 f . . 
        . f 7 1 1 f 7 f 1 1 7 7 7 f . . 
        . . f 7 2 1 2 1 2 2 7 7 f . . . 
        . . . f 2 2 2 2 2 2 7 f . . . . 
        . . . f 1 2 2 2 1 2 f f . . . . 
        . f f f f f f f f f f . . . . . 
        f 7 7 7 f c f 7 7 7 7 f . . . . 
        f 7 7 f f c f 7 7 7 7 f . . . . 
        f f f . f f f f f f f . . . . . 
        . . . f f c f f c c f . . . . . 
        . . . f 7 7 7 f 7 7 7 f . . . . 
        . . . f f f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f . . . . . 
        . . f f f f f f f f 7 f . . . . 
        . f f 7 7 f 7 7 f 7 7 f f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . f 7 2 1 7 7 7 2 1 7 7 f . . . 
        . . f 1 1 f 7 f 1 1 7 f . . . . 
        . . . f 7 7 7 7 7 7 f f . . . . 
        . f f f f f f f f f f . . . . . 
        f 7 7 7 f c f 7 7 7 7 f . . . . 
        f 7 7 f f c f 7 7 7 7 f . . . . 
        f f f . f f f f f f f . . . . . 
        . . . f f c f f c c f . . . . . 
        . . . f 7 7 7 f 7 7 7 f . . . . 
        . . . f f f f f f f f f . . . . 
        `],
    500,
    true
    )
    殭屍.follow(魔法師, 30)
    殭屍的血量.attachToSprite(殭屍, 3, 0)
    殭屍.setPosition(randint(70, 380), 92)
    鬼怪 = sprites.create(img`
        ........................
        ........................
        ........................
        .........fffff..........
        .......ff11111ff........
        ......f111111111f.......
        .....f11111111111f......
        .....f11111111111f......
        ....f1122112211111f.....
        ....f1222112221111f.....
        ....f1222112221111f.....
        ....f1221111221111f.....
        ....f1111111111111f.....
        ....f1111ff111ff11f.....
        ...f1f111ff11f1111f.....
        ...f1ff111111f1f111f....
        ....f..ff1111ff11111f...
        .........fff1111111f....
        ............fffffff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.鬼怪)
    animation.runImageAnimation(
    鬼怪,
    [img`
        ........................
        ........................
        ........................
        .........fffff..........
        .......ff11111ff........
        ......f111111111f.......
        .....f11111111111f......
        .....f11111111111f......
        ....f1122112211111f.....
        ....f1222112221111f.....
        ....f1222112221111f.....
        ....f1221111221111f.....
        ....f1111111111111f.....
        ....f1111ff111ff11f.....
        ...f1f111ff11f1111f.....
        ...f1ff111111f1f111f....
        ....f..ff1111ff11111f...
        .........fff1111111f....
        ............fffffff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        .........fffff..........
        .......ff11111ff........
        ......f111111111f.......
        .fff.f1111111fff1f......
        .f1fff1111111f11ff......
        .f11f112211221f111f.....
        ..f1f1222112221f11f.....
        ...ff1222112221111f.....
        ....f1221111221111f.....
        ....f1111111111111f.....
        ....f1111ff1111111f.....
        .....f111ff1111111f.....
        .....ff111111111111f....
        .......ff11111111111f...
        .........fff1111111f....
        ............fffffff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    200,
    true
    )
    鬼怪.follow(魔法師, 30)
    鬼怪的血量.attachToSprite(鬼怪, 3, 0)
    鬼怪.setPosition(randint(70, 380), randint(92, 30))
    蝙蝠 = sprites.create(img`
        . . . b . . . . . . b b . . . . 
        . . . a b . . . . b a a . . . . 
        . . . a a b . . b a a a . . . . 
        . . . b a b b b b a a . . . . . 
        . . . . b b b b b b b . . . . . 
        . . . . b 2 b 2 b b b f b . . . 
        . . . . b 2 b 2 b b b f b b . . 
        . . . . b b b b b b f f f b b . 
        . . . b b . . . . . . . . b b b 
        . . . b b b . . . . . . . b b b 
        . . b b b b . . . . . . b b b b 
        . . b b b b b . . . . . b b b b 
        . . b b b b b . . . . . . b b b 
        . . . b b b . . . . . . . . b b 
        . . . . b . . . . . . . . . . b 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.蝙蝠)
    animation.runImageAnimation(
    蝙蝠,
    [img`
        ...b......bb............
        ...ab....baa............
        ...aab..baaa............
        ...babbbbaa.............
        ....bbbbbbb.............
        ....b2b2bbbfbf..........
        ....b2b2bbbfbb..........
        ....bbbbbbfffbb.........
        ...bb........bbb........
        ...bbb.......bbb........
        ..bbbb......bbbb........
        ..bbbbb.....bbbbb.......
        ..bbbbb.....bbbbb.......
        ...bbb.......bbb........
        ....b.........b.........
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        bbbb....................
        .dddbb..........bbbb....
        .bbdddb.......bbddd.....
        ...bbbbb.....bdddbb.....
        ...bddb..bb.bbbbbd......
        ...abbb.baa..bddd.......
        ...aabbbaaa..bbbd.......
        ...babbbaa...bddbb......
        ....bbbbbb..bdbdd.......
        ....b2b2bbfbdddb........
        ....b2b2bbfbff..........
        .....bbbbfff............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    200,
    true
    )
    蝙蝠.follow(魔法師, 30)
    蝙蝠的血量.attachToSprite(蝙蝠, 3, 0)
    蝙蝠.setPosition(randint(70, 380), randint(92, 30))
    金幣 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . f 5 5 f . . . . . f 5 5 f . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.金幣)
    金幣.setPosition(randint(70, 380), 92)
    元寶 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . f f f . f 5 5 f . f f f . 
        . . . f 5 5 f 5 5 5 5 f 5 5 f . 
        . . . f 5 5 5 f f f f 5 5 5 f . 
        . . . f f 5 5 5 5 5 5 5 5 f f . 
        . . . . f 5 5 5 5 5 5 5 5 f . . 
        . . . . f f 5 5 5 5 5 5 f f . . 
        . . . . . f f 5 5 5 5 f f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.元寶)
    元寶.setPosition(randint(70, 380), 92)
    生命 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . f f . . . . 
        . . . . f 2 2 f . f 2 2 f . . . 
        . . . f 2 2 2 2 f 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . . f 2 2 2 2 2 2 2 f . . . 
        . . . . . f 2 2 2 2 2 f . . . . 
        . . . . . . f 2 2 2 f . . . . . 
        . . . . . . . f 2 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.生命)
    生命.setPosition(randint(70, 380), 92)
    旗子.setKind(SpriteKind.旗子1)
    魔法師.setKind(SpriteKind.魔法師1)
})
sprites.onOverlap(SpriteKind.射手6, SpriteKind.水母, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.play槍手, SpriteKind.螳螂, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    螳螂的血量.value += -20
})
sprites.onOverlap(SpriteKind.能量4, SpriteKind.蜜蜂, function (sprite, otherSprite) {
    sprite.destroy()
    蜜蜂的血量.value += -20
})
sprites.onOverlap(SpriteKind.play射手, SpriteKind.水母, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    水母的血量.value += -50
})
sprites.onOverlap(SpriteKind.能量3, SpriteKind.蝙蝠, function (sprite, otherSprite) {
    sprite.destroy()
    蝙蝠的血量.value += -20
})
sprites.onOverlap(SpriteKind.play槍手, SpriteKind.龍, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    龍的血量.value += -10
})
sprites.onOverlap(SpriteKind.劍士4, SpriteKind.食人花, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.射手6, SpriteKind.鯊魚, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.槍手6, SpriteKind.水母, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
controller.combos.attachCombo("AD", function () {
    music.pewPew.play()
    animation.runImageAnimation(
    射手,
    [img`
        ..............................
        ......fffff...................
        .....feeeeef..ff..............
        ....feeeeeeef.f.f.............
        ....feeeeeeef.f..f............
        ....feeeedddf.f...f...........
        ....feeee1fdf.f...f.f.........
        ..1.feeed1fdff1fffffff........
        .1.1feffddddfdf...f.f.........
        ..1feef86fffdff..f............
        ..ffffff886ff.f.f.............
        ...ffffdf86f..ff..............
        ....fffdf6ff..................
        .....fdf868f..................
        ......ff88f...................
        .......f668f..................
        .......f868f..................
        .......f88ff..................
        .......fff....................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `,img`
        ..............................
        ......fffff...................
        .....feeeeef..ff..............
        ....feeeeeeef.f.f.............
        ....feeeeeeef.f..f............
        ....feeeedddf.f...f...........
        ....feeee1fdf.f...f.f.........
        ..1.feeed1fdff1fffffff........
        .1.1feffddddfdf...f.f.........
        ..1feeffffffdff..f............
        ..fff68fdddff.f.f.............
        ...ff86fffff..ff..............
        ....fffff6ff..................
        .......f868f..................
        .......f88f...................
        .......f668f..................
        .......f868f..................
        .......f88ff..................
        .......fff....................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `,img`
        ..............................
        ......fffff...................
        .....feeeeef..ff..............
        ....feeeeeeef.f.f.............
        ....feeeeeeef.f..f............
        ....feeeedddf.f...f...........
        ....feeee1fdf.f...f.f.........
        ..1.feeed1fdff1fffffff........
        .1.1feffddddfdf...f.f.........
        ..1feef86fffdff..f............
        ..ffffff886ff.f.f.............
        ...ffffdf86f..ff..............
        ....fffdf6f...................
        .....fdf868f..................
        ......f6fff...................
        .......f66f...................
        .......f86f...................
        .......f88f...................
        ........ff....................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `,img`
        ..............................
        ......fffff...................
        .....feeeeef..ff..............
        ....feeeeeeef.f.f.............
        ....feeeeeeef.f..f............
        ....feeeedddf.f...f...........
        ....feeee1fdf.f...f.f.........
        ..1.feeed1fdff1fffffff........
        .1.1feffddddfdf...f.f.........
        ..1feef86fffdff..f............
        ..ffffff886ff.f.f.............
        ...ffffdf86f..ff..............
        ....fffdf6ff..................
        .....fdf868f..................
        ......ff88f...................
        .......f668f..................
        .......f868f..................
        .......f88ff..................
        .......fff....................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `],
    100,
    false
    )
    能量2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . . . f f . . . . . 
        . . . . 1 f f f f f f f . . . . 
        . . . . . . . . . f f . . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 射手, 50, 0)
    能量2.setKind(SpriteKind.能量2)
    能量2.setFlag(SpriteFlag.AutoDestroy, true)
    pause(100)
})
sprites.onOverlap(SpriteKind.play射手, SpriteKind.狼, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    狼的血量.value += -50
})
sprites.onOverlap(SpriteKind.play魔法師, SpriteKind.含羞草, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    含羞草的血量.value += -30
})
sprites.onOverlap(SpriteKind.射手6, SpriteKind.寶箱3, function (sprite, otherSprite) {
    music.jumpUp.play()
    otherSprite.destroy()
    info.changeScoreBy(3)
})
sprites.onOverlap(SpriteKind.play劍士, SpriteKind.狼, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    狼的血量.value += -100
})
sprites.onOverlap(SpriteKind.射手3, SpriteKind.金幣3, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.能量4, SpriteKind.殭屍, function (sprite, otherSprite) {
    sprite.destroy()
    殭屍的血量.value += -20
})
sprites.onOverlap(SpriteKind.play魔法師, SpriteKind.食人花, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    食人花的血量.value += -100
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.劍士4, SpriteKind.旗子4, function (sprite, otherSprite) {
    tiles.setTilemap(tilemap`層級30`)
    劍士.setStayInScreen(true)
    鯊魚的血量 = statusbars.create(20, 4, StatusBarKind.鯊魚)
    鯊魚的血量.setColor(8, 2)
    魟魚的血量 = statusbars.create(20, 4, StatusBarKind.魟魚)
    魟魚的血量.setColor(8, 2)
    水母的血量 = statusbars.create(20, 4, StatusBarKind.水母)
    水母的血量.setColor(8, 2)
    info.startCountdown(30)
    旗子.setPosition(630, 90)
    sprite.setPosition(0, 92)
    鯊魚 = sprites.create(img`
        ....................ffffff..............
        .................fffcccccf..............
        ................fccccccff...............
        ..........ffffffccccccf.................
        .......fffcccccccccccf..................
        .....ffcccccfccccccccff.................
        ....fccffccccfccfccccccff...............
        ...fccf2cccfccfccfcccccccff.............
        ..fcccccccffccfcccfccccccccff...........
        .fcccccccf1fccccccfccccccccccff.........
        fcccccfff3fccccccccccccccccccccf........
        .fffff133f1cccf1ccccccccccccccccf.ffffff
        ....fffff11ccccf11ffffffff1111cccfcccccf
        .....f11111fcccfff........ffff1ccccccff.
        ......ffffffcccf..............fccccff...
        ............fcccf.............fcccf.....
        .............ffcf.............fccf......
        ...............ff..............fcf......
        ...............................fcf......
        ................................ff......
        `, SpriteKind.鯊魚)
    animation.runImageAnimation(
    鯊魚,
    [img`
        ....................ffffff..............
        .................fffcccccf..............
        ................fccccccff...............
        ..........ffffffccccccf.................
        .......fffcccccccccccf..................
        .....ffcccccfccccccccff.................
        ....fccffccccfccfccccccff...............
        ...fccf2cccfccfccfcccccccff.............
        ..fcccccccffccfcccfccccccccff...........
        .fcccccccf1fccccccfccccccccccff.........
        fcccccfff3fccccccccccccccccccccf........
        .fffff133f1cccf1ccccccccccccccccf.ffffff
        ....fffff11ccccf11ffffffff1111cccfcccccf
        .....f11111fcccfff........ffff1ccccccff.
        ......ffffffcccf..............fccccff...
        ............fcccf.............fcccf.....
        .............ffcf.............fccf......
        ...............ff..............fcf......
        ...............................fcf......
        ................................ff......
        `,img`
        ....................ffffff..............
        .................fffcccccf..............
        ................fccccccff...............
        ....ffffffffffffccccccf.................
        ..ffcccccccccccccccccf..................
        .ffcccccffccfccccccccff.................
        .1ffcccf2ccccfccfccccccff...............
        ..1ffccccccfccfccfcccccccff.............
        ..1.1fffcccfccfcccfccccccccf............
        ......ccfccfccccccfcccccccccff..........
        ...1.1.ffcccccccccccccccccccccf.fffffff.
        ..11ffffccccccf1cccccccccccccccfccccccf.
        ..fff111111ccccf11ffffffff111cccccccff..
        ..f111ffffffcccfff........fff1ccccff....
        ...ffff....fcccf.............fcccf......
        ............fcccf............fccf.......
        .............ffcf............fccf.......
        ...............ff.............fcf.......
        ..............................fcf.......
        ...............................ff.......
        `,img`
        ....................ffffff..............
        .................fffcccccf..............
        ................fccccccff...............
        ..........ffffffccccccf.................
        .........fcccccccccccf..................
        ......ffffccfccccccccff.................
        .....fcccccccfccfccccccff...............
        ....fccffccfccfccfcccccccff.............
        ...fccf2ccffccfcccfccccccccff...........
        ..fcccccccffccccccfccccccccccff.........
        ffcccccccffccccccccccccccccccccf........
        fcccccccff1cccf1ccccccccccccccccf.ffffff
        .ffffffff11ccccf11ffffffff1111cccfcccccf
        .....f11111fcccfff........ffff1ccccccff.
        ......ffffffcccf..............fccccff...
        ............fcccf.............fcccf.....
        .............ffcf.............fccf......
        ...............ff..............fcf......
        ...............................fcf......
        ................................ff......
        `],
    200,
    true
    )
    鯊魚.follow(劍士, 30)
    鯊魚的血量.attachToSprite(鯊魚, 3, 0)
    鯊魚.setPosition(randint(70, 380), randint(92, 30))
    魟魚 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . f b b b b f . . . . . . . 
        . . f b b b b b b f f . . . . . 
        . f b b b b b b b b b f . . . . 
        f b b 2 b b b b b b b b f f f f 
        . f b b b b b b b b b b b b b f 
        f b b 2 b b b b b b b b f f f f 
        . f b b b b b b b b b f . . . . 
        . . f b b b b b b f f . . . . . 
        . . . f b b b b f . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.魟魚)
    animation.runImageAnimation(
    魟魚,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . f b b b b f . . . . . . . 
        . . f b b b b b b f f . . . . . 
        . f b b b b b b b b b f . . . . 
        f b b 2 b b b b b b b b f f f f 
        . f b b b b b b b b b b b b b f 
        f b b 2 b b b b b b b b f f f f 
        . f b b b b b b b b b f . . . . 
        . . f b b b b b b f f . . . . . 
        . . . f b b b b f . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . f b b b b f . . . . . . . 
        . . f b b b b b b f f . . . f f 
        . f b b b b b b b b b f . f b f 
        f b b 2 b b b b b b b b f b f . 
        . f b b b b b b b b b b b b f . 
        f b b 2 b b b b b b b b f f . . 
        . f b b b b b b b b b f . . . . 
        . . f b b b b b b f f . . . . . 
        . . . f b b b b f . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . f b b b b f . . . . . . . 
        . . f b b b b b b f f . . . . . 
        . f b b b b b b b b b f . . . . 
        f b b 2 b b b b b b b b f f . . 
        . f b b b b b b b b b b b b f . 
        f b b 2 b b b b b b b b f b f . 
        . f b b b b b b b b b f . f b f 
        . . f b b b b b b f f . . . f f 
        . . . f b b b b f . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
    魟魚.follow(劍士, 30)
    魟魚的血量.attachToSprite(魟魚, 3, 0)
    魟魚.setPosition(randint(70, 380), randint(92, 30))
    水母 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.水母)
    animation.runImageAnimation(
    水母,
    [img`
        . . . . . f f f f f . . . . . . 
        . . . . f 3 3 3 3 3 f . . . . . 
        . . . f 3 3 3 3 3 3 3 f . . . . 
        . . f f 3 3 3 3 3 3 3 f f . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f f f f f f f f f f f . . . 
        . . . f . f f . f . . f . . . . 
        . . f f . f . . f . . f f . . . 
        . . f . . f . . f f . . f . . . 
        . . f . . f . . . f . . f . . . 
        . . f . . f . . . f . . f . . . 
        . . f f . f f . . f . . f f . . 
        . . . f . . f . . . . . . f . . 
        . . . . . . f . . . . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 3 3 3 3 3 f . . . . . 
        . . . f 3 3 3 3 3 3 3 f . . . . 
        . . f f 3 3 3 3 3 3 3 f f . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f f f f f f f f f f f . . . 
        . . . f . . f . . f . . f . . . 
        . . . f f . f . . f . f f . . . 
        . . . . f . f . f f . f . . . . 
        . . . . f . f . f . . f . . . . 
        . . . . f . f . f . . f . . . . 
        . . . f f f f . f f . f f f . . 
        . . . f . f . . . . . . . f . . 
        . . . . . f . . . . . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 3 3 3 3 3 f . . . . . 
        . . . f 3 3 3 3 3 3 3 f . . . . 
        . . f f 3 3 3 3 3 3 3 f f . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f f f f f f f f f f f . . . 
        . . . f . . f . . f . . f . . . 
        . . . f f . f . . f . f f . . . 
        . . . . f . f . f f . f . . . . 
        . . . . f . f . f . . f . . . . 
        . . . . f . f . f . . f . . . . 
        . . . f f f f . f f . f f f . . 
        . . . f . f . . . . . . . f . . 
        . . . . . f . . . . . . . . . . 
        `],
    200,
    true
    )
    水母.follow(劍士, 30)
    水母的血量.attachToSprite(水母, 3, 0)
    水母.setPosition(randint(70, 380), randint(92, 30))
    金幣 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . f 5 5 f . . . . . f 5 5 f . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.金幣5)
    金幣.setPosition(randint(70, 380), 92)
    元寶 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . f f f . f 5 5 f . f f f . 
        . . . f 5 5 f 5 5 5 5 f 5 5 f . 
        . . . f 5 5 5 f f f f 5 5 5 f . 
        . . . f f 5 5 5 5 5 5 5 5 f f . 
        . . . . f 5 5 5 5 5 5 5 5 f . . 
        . . . . f f 5 5 5 5 5 5 f f . . 
        . . . . . f f 5 5 5 5 f f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.元寶5)
    元寶.setPosition(randint(70, 380), 92)
    寶箱 = sprites.create(img`
        . . f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e e f . 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 5 e e e e e e e e e e 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f f f f f f f d d f f f f f f f 
        c f f f f f f c c f f f f f f c 
        c c c c c c f c c f c c c c c c 
        f 5 5 5 5 5 c f f c 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f c 5 5 5 5 5 5 5 5 5 5 5 5 c f 
        f f f f f f f f f f f f f f f f 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.寶箱2)
    寶箱.setPosition(randint(280, 380), 92)
    生命 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . f f . . . . 
        . . . . f 2 2 f . f 2 2 f . . . 
        . . . f 2 2 2 2 f 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . . f 2 2 2 2 2 2 2 f . . . 
        . . . . . f 2 2 2 2 2 f . . . . 
        . . . . . . f 2 2 2 f . . . . . 
        . . . . . . . f 2 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.生命5)
    生命.setPosition(randint(70, 380), 92)
    旗子.setKind(SpriteKind.旗子5)
    劍士.setKind(SpriteKind.劍士5)
})
sprites.onOverlap(SpriteKind.射手5, SpriteKind.鯊魚, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.play魔法師, SpriteKind.魟魚, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    魟魚的血量.value += -30
})
sprites.onOverlap(SpriteKind.能量2, SpriteKind.向日葵, function (sprite, otherSprite) {
    sprite.destroy()
    向日葵的血量.value += -20
})
sprites.onOverlap(SpriteKind.能量2, SpriteKind.蜘蛛, function (sprite, otherSprite) {
    sprite.destroy()
    蜘蛛的血量.value += -20
})
sprites.onOverlap(SpriteKind.魔法師4, SpriteKind.元寶4, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.能量1, SpriteKind.老虎, function (sprite, otherSprite) {
    sprite.destroy()
    老虎的血量.value += -20
})
sprites.onOverlap(SpriteKind.能量3, SpriteKind.蜘蛛, function (sprite, otherSprite) {
    sprite.destroy()
    蜘蛛的血量.value += -20
})
sprites.onOverlap(SpriteKind.play槍手, SpriteKind.鬼怪, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    鬼怪的血量.value += -20
})
sprites.onOverlap(SpriteKind.player箭頭, SpriteKind.player劍士, function (sprite, otherSprite) {
    劍士.setStayInScreen(true)
    箭頭.destroy()
    劍士.destroy()
    射手.destroy()
    魔法師.destroy()
    槍手.destroy()
    劍士 = sprites.create(img`
        ........................
        .......fff..............
        ...ffff222f........fff..
        ..f22222222f......fccf..
        .fffffffffff.....fcccf..
        .fdddddddfff....fcccf...
        ffdddd1fdddf.f.fcccf....
        fddddd1fdddffefcccf.....
        .fdddddddddffeeccf......
        ..ffffffffffffeef.......
        ...f22f222fddefeef......
        ...f22ffffffff.ff.......
        ...f222222f.............
        ...ffffffff.............
        ...666.666..............
        ...ff..ff...............
        ...fff.fff..............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.player劍士)
    劍士.setPosition(60, 92)
    scene.cameraFollowSprite(劍士)
    劍士.say("我叫Carden")
    pause(1000)
    劍士.say("攻擊怪物時")
    pause(1000)
    劍士.say("請按\"A上\"")
    pause(1500)
    劍士.say("我的大招可以使怪物直接死亡")
    pause(3000)
    劍士.say("使用大招時")
    pause(1000)
    劍士.say("請按\"上上下下\"", 2000)
    pause(2000)
    controller.moveSprite(劍士, 100, 0)
})
sprites.onOverlap(SpriteKind.能量1, SpriteKind.龍, function (sprite, otherSprite) {
    sprite.destroy()
    龍的血量.value += -5
})
sprites.onOverlap(SpriteKind.能量3, SpriteKind.向日葵, function (sprite, otherSprite) {
    sprite.destroy()
    向日葵的血量.value += -20
})
sprites.onOverlap(SpriteKind.魔法師5, SpriteKind.旗子5, function (sprite, otherSprite) {
    旗子.setFlag(SpriteFlag.Invisible, true)
    tiles.setTilemap(tilemap`層級34`)
    貝殼 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . f f b b d b d d b b f f . . 
        . f d d b d d b d d d b d d f . 
        f 1 1 b d d b d d b d d b 1 1 f 
        f f f f 1 1 f 1 1 f 1 1 f f f f 
        f b d f f f b f f b f f f d b f 
        . f b b d d b d d b d d b b f . 
        . . f f f f f f f f f f f f . . 
        `, SpriteKind.貝殼)
    animation.runImageAnimation(
    貝殼,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . f f b b d b d d b b f f . . 
        . f d d b d d b d d d b d d f . 
        f 1 1 b d d b d d b d d b 1 1 f 
        f f f f 1 1 f 1 1 f 1 1 f f f f 
        f b d f f f b f f b f f f d b f 
        . f b b d d b d d b d d b b f . 
        . . f f f f f f f f f f f f . . 
        `,img`
        . . . . . f c c c c f . . . . . 
        . . c c f b b d d b b f c c . . 
        . c b d d b b c c b b d d b c . 
        . f d c c c b c c b c c c d f . 
        f c b b c c b c c b c c b b c f 
        c d c c b c c c c c c b c c d c 
        c d c c c c c c c c c c c c d c 
        . f b b c c c c c c c c b b f . 
        . . f b b f f f f f f b b f . . 
        . . c c f 1 1 1 1 1 1 f c c . . 
        . c d f 1 1 1 1 1 1 1 1 f d c . 
        c d 1 1 f 1 1 1 1 1 1 f 1 1 d c 
        f d c c 1 f f 1 1 f f 1 c c d f 
        f b d c b b 1 f f 1 b b c d b f 
        . c b b d d b d d b d d b b c . 
        . . f f f f f f f f f f f f . . 
        `,img`
        . . . . . f c c c c f . . . . . 
        . . c c f b b d d b b f c c . . 
        . c b d d b b c c b b d d b c . 
        . f d c c c b c c b c c c d f . 
        f c b b c c b c c b c c b b c f 
        c d c c b c c c c c c b c c d c 
        c d c c c c c c c c c c c c d c 
        . f b b c c c c c c c c b b f . 
        . . f b b f f f f f f b b f . . 
        . . c c f 1 1 1 1 1 1 f c c . . 
        . c d f 1 1 1 1 1 1 1 1 f d c . 
        c d 1 1 f 1 1 1 1 1 1 f 1 1 d c 
        f d c c 1 f f 1 1 f f 1 c c d f 
        f b d c b b 1 f f 1 b b c d b f 
        . c b b d d b d d b d d b b c . 
        . . f f f f f f f f f f f f . . 
        `],
    500,
    true
    )
    貝殼.setPosition(630, 90)
    魔法師.setStayInScreen(true)
    鯊魚的血量 = statusbars.create(20, 4, StatusBarKind.鯊魚)
    鯊魚的血量.setColor(8, 2)
    魟魚的血量 = statusbars.create(20, 4, StatusBarKind.魟魚)
    魟魚的血量.setColor(8, 2)
    水母的血量 = statusbars.create(20, 4, StatusBarKind.水母)
    水母的血量.setColor(8, 2)
    龍的血量 = statusbars.create(40, 6, StatusBarKind.龍)
    龍的血量.setColor(8, 2)
    info.startCountdown(30)
    旗子.setPosition(630, 90)
    sprite.setPosition(0, 92)
    鯊魚 = sprites.create(img`
        ....................ffffff..............
        .................fffcccccf..............
        ................fccccccff...............
        ..........ffffffccccccf.................
        .......fffcccccccccccf..................
        .....ffcccccfccccccccff.................
        ....fccffccccfccfccccccff...............
        ...fccf2cccfccfccfcccccccff.............
        ..fcccccccffccfcccfccccccccff...........
        .fcccccccf1fccccccfccccccccccff.........
        fcccccfff3fccccccccccccccccccccf........
        .fffff133f1cccf1ccccccccccccccccf.ffffff
        ....fffff11ccccf11ffffffff1111cccfcccccf
        .....f11111fcccfff........ffff1ccccccff.
        ......ffffffcccf..............fccccff...
        ............fcccf.............fcccf.....
        .............ffcf.............fccf......
        ...............ff..............fcf......
        ...............................fcf......
        ................................ff......
        `, SpriteKind.鯊魚)
    animation.runImageAnimation(
    鯊魚,
    [img`
        ....................ffffff..............
        .................fffcccccf..............
        ................fccccccff...............
        ..........ffffffccccccf.................
        .......fffcccccccccccf..................
        .....ffcccccfccccccccff.................
        ....fccffccccfccfccccccff...............
        ...fccf2cccfccfccfcccccccff.............
        ..fcccccccffccfcccfccccccccff...........
        .fcccccccf1fccccccfccccccccccff.........
        fcccccfff3fccccccccccccccccccccf........
        .fffff133f1cccf1ccccccccccccccccf.ffffff
        ....fffff11ccccf11ffffffff1111cccfcccccf
        .....f11111fcccfff........ffff1ccccccff.
        ......ffffffcccf..............fccccff...
        ............fcccf.............fcccf.....
        .............ffcf.............fccf......
        ...............ff..............fcf......
        ...............................fcf......
        ................................ff......
        `,img`
        ....................ffffff..............
        .................fffcccccf..............
        ................fccccccff...............
        ....ffffffffffffccccccf.................
        ..ffcccccccccccccccccf..................
        .ffcccccffccfccccccccff.................
        .1ffcccf2ccccfccfccccccff...............
        ..1ffccccccfccfccfcccccccff.............
        ..1.1fffcccfccfcccfccccccccf............
        ......ccfccfccccccfcccccccccff..........
        ...1.1.ffcccccccccccccccccccccf.fffffff.
        ..11ffffccccccf1cccccccccccccccfccccccf.
        ..fff111111ccccf11ffffffff111cccccccff..
        ..f111ffffffcccfff........fff1ccccff....
        ...ffff....fcccf.............fcccf......
        ............fcccf............fccf.......
        .............ffcf............fccf.......
        ...............ff.............fcf.......
        ..............................fcf.......
        ...............................ff.......
        `,img`
        ....................ffffff..............
        .................fffcccccf..............
        ................fccccccff...............
        ..........ffffffccccccf.................
        .........fcccccccccccf..................
        ......ffffccfccccccccff.................
        .....fcccccccfccfccccccff...............
        ....fccffccfccfccfcccccccff.............
        ...fccf2ccffccfcccfccccccccff...........
        ..fcccccccffccccccfccccccccccff.........
        ffcccccccffccccccccccccccccccccf........
        fcccccccff1cccf1ccccccccccccccccf.ffffff
        .ffffffff11ccccf11ffffffff1111cccfcccccf
        .....f11111fcccfff........ffff1ccccccff.
        ......ffffffcccf..............fccccff...
        ............fcccf.............fcccf.....
        .............ffcf.............fccf......
        ...............ff..............fcf......
        ...............................fcf......
        ................................ff......
        `],
    200,
    true
    )
    鯊魚.follow(魔法師, 30)
    鯊魚的血量.attachToSprite(鯊魚, 3, 0)
    鯊魚.setPosition(randint(70, 380), randint(92, 30))
    魟魚 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . f b b b b f . . . . . . . 
        . . f b b b b b b f f . . . . . 
        . f b b b b b b b b b f . . . . 
        f b b 2 b b b b b b b b f f f f 
        . f b b b b b b b b b b b b b f 
        f b b 2 b b b b b b b b f f f f 
        . f b b b b b b b b b f . . . . 
        . . f b b b b b b f f . . . . . 
        . . . f b b b b f . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.魟魚)
    animation.runImageAnimation(
    魟魚,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . f b b b b f . . . . . . . 
        . . f b b b b b b f f . . . . . 
        . f b b b b b b b b b f . . . . 
        f b b 2 b b b b b b b b f f f f 
        . f b b b b b b b b b b b b b f 
        f b b 2 b b b b b b b b f f f f 
        . f b b b b b b b b b f . . . . 
        . . f b b b b b b f f . . . . . 
        . . . f b b b b f . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . f b b b b f . . . . . . . 
        . . f b b b b b b f f . . . f f 
        . f b b b b b b b b b f . f b f 
        f b b 2 b b b b b b b b f b f . 
        . f b b b b b b b b b b b b f . 
        f b b 2 b b b b b b b b f f . . 
        . f b b b b b b b b b f . . . . 
        . . f b b b b b b f f . . . . . 
        . . . f b b b b f . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . f b b b b f . . . . . . . 
        . . f b b b b b b f f . . . . . 
        . f b b b b b b b b b f . . . . 
        f b b 2 b b b b b b b b f f . . 
        . f b b b b b b b b b b b b f . 
        f b b 2 b b b b b b b b f b f . 
        . f b b b b b b b b b f . f b f 
        . . f b b b b b b f f . . . f f 
        . . . f b b b b f . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
    魟魚.follow(魔法師, 30)
    魟魚的血量.attachToSprite(魟魚, 3, 0)
    魟魚.setPosition(randint(70, 380), randint(92, 30))
    水母 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.水母)
    animation.runImageAnimation(
    水母,
    [img`
        . . . . . f f f f f . . . . . . 
        . . . . f 3 3 3 3 3 f . . . . . 
        . . . f 3 3 3 3 3 3 3 f . . . . 
        . . f f 3 3 3 3 3 3 3 f f . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f f f f f f f f f f f . . . 
        . . . f . f f . f . . f . . . . 
        . . f f . f . . f . . f f . . . 
        . . f . . f . . f f . . f . . . 
        . . f . . f . . . f . . f . . . 
        . . f . . f . . . f . . f . . . 
        . . f f . f f . . f . . f f . . 
        . . . f . . f . . . . . . f . . 
        . . . . . . f . . . . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 3 3 3 3 3 f . . . . . 
        . . . f 3 3 3 3 3 3 3 f . . . . 
        . . f f 3 3 3 3 3 3 3 f f . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f f f f f f f f f f f . . . 
        . . . f . . f . . f . . f . . . 
        . . . f f . f . . f . f f . . . 
        . . . . f . f . f f . f . . . . 
        . . . . f . f . f . . f . . . . 
        . . . . f . f . f . . f . . . . 
        . . . f f f f . f f . f f f . . 
        . . . f . f . . . . . . . f . . 
        . . . . . f . . . . . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 3 3 3 3 3 f . . . . . 
        . . . f 3 3 3 3 3 3 3 f . . . . 
        . . f f 3 3 3 3 3 3 3 f f . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f f f f f f f f f f f . . . 
        . . . f . . f . . f . . f . . . 
        . . . f f . f . . f . f f . . . 
        . . . . f . f . f f . f . . . . 
        . . . . f . f . f . . f . . . . 
        . . . . f . f . f . . f . . . . 
        . . . f f f f . f f . f f f . . 
        . . . f . f . . . . . . . f . . 
        . . . . . f . . . . . . . . . . 
        `],
    200,
    true
    )
    水母.follow(魔法師, 30)
    水母的血量.attachToSprite(水母, 3, 0)
    水母.setPosition(randint(70, 380), randint(92, 30))
    龍 = sprites.create(img`
        ...............ffffff...
        ..............f88888f...
        .......f..f..f88888f8f..
        ......f..f..f888fff.ff..
        .....f..f...f88ff8f.....
        .....fffff..f8ff888f....
        .....f8888f.ff88888f....
        ....ff28288ff888888ff...
        ....f8888888fffff888ff..
        ....fffff8888f...ff88f..
        ........fd8888f....fff..
        ......ffffd8888f........
        .....f888fd88888fff...ff
        ....f8f8fffd8888888fff8f
        ....f1f1f..fdd888888888f
        .....f.f..f8888f888888ff
        ..........f8888f888f88f.
        ..........f88ff.f888ff..
        ...........f8f..f88f....
        ...........f8f...f8f....
        ..........f18f..f18f....
        ..........ffff..ffff....
        ........................
        ........................
        `, SpriteKind.龍)
    animation.runImageAnimation(
    龍,
    [img`
        ...............ffffff...
        ..............f88888f...
        .......f..f..f88888f8f..
        ......f..f..f888fff.ff..
        .....f..f...f88ff8f.....
        .....fffff..f8ff888f....
        .....f8888f.ff88888f....
        ....ff28288ff888888ff...
        ....f8888888fffff888ff..
        ....fffff8888f...ff88f..
        ........fd8888f....fff..
        ......ffffd8888f........
        .....f888fd88888fff...ff
        ....f8f8fffd8888888fff8f
        ....f1f1f..fdd888888888f
        .....f.f..f8888f888888ff
        ..........f8888f888f88f.
        ..........f88ff.f888ff..
        ...........f8f..f88f....
        ...........f8f...f8f....
        ..........f18f..f18f....
        ..........ffff..ffff....
        ........................
        ........................
        `,img`
        ...............ffffff...
        ..............f88888f...
        .......f..f..f88888f8f..
        ......f..f..f888fff.ff..
        .....f..f...f88ff8f.....
        .....fffff..f8ff888f....
        .....f8888f.ff88888f....
        .99.ff28288ff888888ff...
        9999f8888888fffff888ff..
        9999fffff8888f...ff88f..
        99999191fd8888f....fff..
        9999ffffffd8888f........
        9999.f888fd88888fff...ff
        .99.f8f8fffd8888888fff8f
        ....f1f1f..fdd888888888f
        .....f.f..f8888f888888ff
        ..........f8888f888f88f.
        ..........f88ff.f888ff..
        ...........f8f..f88f....
        ...........f8f...f8f....
        ..........f18f..f18f....
        ..........ffff..ffff....
        ........................
        ........................
        `],
    500,
    true
    )
    龍.follow(魔法師, 50)
    龍的血量.attachToSprite(龍, 3, 0)
    龍.setPosition(380, 92)
    金幣 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . f 5 5 f . . . . . f 5 5 f . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.金幣6)
    金幣.setPosition(randint(70, 380), 92)
    元寶 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . f f f . f 5 5 f . f f f . 
        . . . f 5 5 f 5 5 5 5 f 5 5 f . 
        . . . f 5 5 5 f f f f 5 5 5 f . 
        . . . f f 5 5 5 5 5 5 5 5 f f . 
        . . . . f 5 5 5 5 5 5 5 5 f . . 
        . . . . f f 5 5 5 5 5 5 f f . . 
        . . . . . f f 5 5 5 5 f f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.元寶6)
    元寶.setPosition(randint(70, 380), 92)
    寶箱 = sprites.create(img`
        . . f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e e f . 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 5 e e e e e e e e e e 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f f f f f f f d d f f f f f f f 
        c f f f f f f c c f f f f f f c 
        c c c c c c f c c f c c c c c c 
        f 5 5 5 5 5 c f f c 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f c 5 5 5 5 5 5 5 5 5 5 5 5 c f 
        f f f f f f f f f f f f f f f f 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.寶箱3)
    寶箱.setPosition(randint(280, 380), 92)
    魔法師.setKind(SpriteKind.魔法師6)
})
sprites.onOverlap(SpriteKind.射手3, SpriteKind.蜘蛛, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.能量1, SpriteKind.魟魚, function (sprite, otherSprite) {
    sprite.destroy()
    魟魚的血量.value += -20
})
sprites.onOverlap(SpriteKind.player槍手, SpriteKind.旗子, function (sprite, otherSprite) {
    tiles.setTilemap(tilemap`層級14`)
    槍手.setStayInScreen(true)
    殭屍的血量 = statusbars.create(20, 4, StatusBarKind.殭屍)
    殭屍的血量.setColor(8, 2)
    鬼怪的血量 = statusbars.create(20, 4, StatusBarKind.鬼怪)
    鬼怪的血量.setColor(8, 2)
    蝙蝠的血量 = statusbars.create(20, 4, StatusBarKind.蝙蝠)
    蝙蝠的血量.setColor(8, 2)
    info.startCountdown(30)
    旗子.setPosition(630, 90)
    sprite.setPosition(0, 92)
    殭屍 = sprites.create(img`
        . . . f f f f f f f f . . . . . 
        . . f f f f f f f f 7 f . . . . 
        . f f 7 7 f 7 7 f 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . f 7 2 1 7 7 7 2 1 7 7 7 f . . 
        . f 7 1 1 f 7 f 1 1 7 7 7 f . . 
        . . f 7 7 7 7 7 7 7 7 7 f . . . 
        . . . f 2 1 2 1 2 2 7 f . . . . 
        . . . f 1 2 2 2 1 7 f f . . . . 
        . f f f f f f f f f f . . . . . 
        f 7 7 7 f c f 7 7 7 7 f . . . . 
        f 7 7 f f c f 7 7 7 7 f . . . . 
        f f f . f f f f f f f . . . . . 
        . . . f f c f f c c f . . . . . 
        . . . f 7 7 7 f 7 7 7 f . . . . 
        . . . f f f f f f f f f . . . . 
        `, SpriteKind.殭屍)
    animation.runImageAnimation(
    殭屍,
    [img`
        . . . f f f f f f f f . . . . . 
        . . f f f f f f f f 7 f . . . . 
        . f f 7 7 f 7 7 f 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . f 7 2 1 7 7 7 2 1 7 7 7 f . . 
        . f 7 1 1 f 7 f 1 1 7 7 7 f . . 
        . . f 7 7 7 7 7 7 7 7 7 f . . . 
        . . . f 2 1 2 1 2 2 7 f . . . . 
        . . . f 1 2 2 2 1 7 f f . . . . 
        . f f f f f f f f f f . . . . . 
        f 7 7 7 f c f 7 7 7 7 f . . . . 
        f 7 7 f f c f 7 7 7 7 f . . . . 
        f f f . f f f f f f f . . . . . 
        . . . f f c f f c c f . . . . . 
        . . . f 7 7 7 f 7 7 7 f . . . . 
        . . . f f f f f f f f f . . . . 
        `,img`
        . . . f f f f f f f f . . . . . 
        . . f f f f f f f f 7 f . . . . 
        . f f 7 7 f 7 7 f 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . f 7 2 1 7 7 7 2 1 7 7 7 f . . 
        . f 7 1 1 f 7 f 1 1 7 7 7 f . . 
        . . f 7 2 1 2 1 2 2 7 7 f . . . 
        . . . f 2 2 2 2 2 2 7 f . . . . 
        . . . f 1 2 2 2 1 2 f f . . . . 
        . f f f f f f f f f f . . . . . 
        f 7 7 7 f c f 7 7 7 7 f . . . . 
        f 7 7 f f c f 7 7 7 7 f . . . . 
        f f f . f f f f f f f . . . . . 
        . . . f f c f f c c f . . . . . 
        . . . f 7 7 7 f 7 7 7 f . . . . 
        . . . f f f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f . . . . . 
        . . f f f f f f f f 7 f . . . . 
        . f f 7 7 f 7 7 f 7 7 f f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . f 7 2 1 7 7 7 2 1 7 7 f . . . 
        . . f 1 1 f 7 f 1 1 7 f . . . . 
        . . . f 7 7 7 7 7 7 f f . . . . 
        . f f f f f f f f f f . . . . . 
        f 7 7 7 f c f 7 7 7 7 f . . . . 
        f 7 7 f f c f 7 7 7 7 f . . . . 
        f f f . f f f f f f f . . . . . 
        . . . f f c f f c c f . . . . . 
        . . . f 7 7 7 f 7 7 7 f . . . . 
        . . . f f f f f f f f f . . . . 
        `],
    500,
    true
    )
    殭屍.follow(槍手, 30)
    殭屍的血量.attachToSprite(殭屍, 3, 0)
    殭屍.setPosition(randint(70, 380), 92)
    鬼怪 = sprites.create(img`
        ........................
        ........................
        ........................
        .........fffff..........
        .......ff11111ff........
        ......f111111111f.......
        .....f11111111111f......
        .....f11111111111f......
        ....f1122112211111f.....
        ....f1222112221111f.....
        ....f1222112221111f.....
        ....f1221111221111f.....
        ....f1111111111111f.....
        ....f1111ff111ff11f.....
        ...f1f111ff11f1111f.....
        ...f1ff111111f1f111f....
        ....f..ff1111ff11111f...
        .........fff1111111f....
        ............fffffff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.鬼怪)
    animation.runImageAnimation(
    鬼怪,
    [img`
        ........................
        ........................
        ........................
        .........fffff..........
        .......ff11111ff........
        ......f111111111f.......
        .....f11111111111f......
        .....f11111111111f......
        ....f1122112211111f.....
        ....f1222112221111f.....
        ....f1222112221111f.....
        ....f1221111221111f.....
        ....f1111111111111f.....
        ....f1111ff111ff11f.....
        ...f1f111ff11f1111f.....
        ...f1ff111111f1f111f....
        ....f..ff1111ff11111f...
        .........fff1111111f....
        ............fffffff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        .........fffff..........
        .......ff11111ff........
        ......f111111111f.......
        .fff.f1111111fff1f......
        .f1fff1111111f11ff......
        .f11f112211221f111f.....
        ..f1f1222112221f11f.....
        ...ff1222112221111f.....
        ....f1221111221111f.....
        ....f1111111111111f.....
        ....f1111ff1111111f.....
        .....f111ff1111111f.....
        .....ff111111111111f....
        .......ff11111111111f...
        .........fff1111111f....
        ............fffffff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    200,
    true
    )
    鬼怪.follow(槍手, 30)
    鬼怪的血量.attachToSprite(鬼怪, 3, 0)
    鬼怪.setPosition(randint(70, 380), randint(92, 30))
    蝙蝠 = sprites.create(img`
        . . . b . . . . . . b b . . . . 
        . . . a b . . . . b a a . . . . 
        . . . a a b . . b a a a . . . . 
        . . . b a b b b b a a . . . . . 
        . . . . b b b b b b b . . . . . 
        . . . . b 2 b 2 b b b f b . . . 
        . . . . b 2 b 2 b b b f b b . . 
        . . . . b b b b b b f f f b b . 
        . . . b b . . . . . . . . b b b 
        . . . b b b . . . . . . . b b b 
        . . b b b b . . . . . . b b b b 
        . . b b b b b . . . . . b b b b 
        . . b b b b b . . . . . . b b b 
        . . . b b b . . . . . . . . b b 
        . . . . b . . . . . . . . . . b 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.蝙蝠)
    animation.runImageAnimation(
    蝙蝠,
    [img`
        ...b......bb............
        ...ab....baa............
        ...aab..baaa............
        ...babbbbaa.............
        ....bbbbbbb.............
        ....b2b2bbbfbf..........
        ....b2b2bbbfbb..........
        ....bbbbbbfffbb.........
        ...bb........bbb........
        ...bbb.......bbb........
        ..bbbb......bbbb........
        ..bbbbb.....bbbbb.......
        ..bbbbb.....bbbbb.......
        ...bbb.......bbb........
        ....b.........b.........
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        bbbb....................
        .dddbb..........bbbb....
        .bbdddb.......bbddd.....
        ...bbbbb.....bdddbb.....
        ...bddb..bb.bbbbbd......
        ...abbb.baa..bddd.......
        ...aabbbaaa..bbbd.......
        ...babbbaa...bddbb......
        ....bbbbbb..bdbdd.......
        ....b2b2bbfbdddb........
        ....b2b2bbfbff..........
        .....bbbbfff............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    200,
    true
    )
    蝙蝠.follow(槍手, 30)
    蝙蝠的血量.attachToSprite(蝙蝠, 3, 0)
    蝙蝠.setPosition(randint(70, 380), randint(92, 30))
    金幣 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . f 5 5 f . . . . . f 5 5 f . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.金幣)
    金幣.setPosition(randint(70, 380), 92)
    元寶 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . f f f . f 5 5 f . f f f . 
        . . . f 5 5 f 5 5 5 5 f 5 5 f . 
        . . . f 5 5 5 f f f f 5 5 5 f . 
        . . . f f 5 5 5 5 5 5 5 5 f f . 
        . . . . f 5 5 5 5 5 5 5 5 f . . 
        . . . . f f 5 5 5 5 5 5 f f . . 
        . . . . . f f 5 5 5 5 f f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.元寶)
    元寶.setPosition(randint(70, 380), 92)
    生命 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . f f . . . . 
        . . . . f 2 2 f . f 2 2 f . . . 
        . . . f 2 2 2 2 f 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . . f 2 2 2 2 2 2 2 f . . . 
        . . . . . f 2 2 2 2 2 f . . . . 
        . . . . . . f 2 2 2 f . . . . . 
        . . . . . . . f 2 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.生命)
    生命.setPosition(randint(70, 380), 92)
    旗子.setKind(SpriteKind.旗子1)
    槍手.setKind(SpriteKind.槍手1)
})
statusbars.onZero(StatusBarKind.水母, function (status) {
    水母.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.魔法師6, SpriteKind.金幣6, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.能量3, SpriteKind.蟒蛇, function (sprite, otherSprite) {
    sprite.destroy()
    蟒蛇的血量.value += -20
})
sprites.onOverlap(SpriteKind.射手3, SpriteKind.蜜蜂, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.劍士3, SpriteKind.元寶3, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.射手4, SpriteKind.含羞草, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.槍手5, SpriteKind.水母, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.劍士3, SpriteKind.金幣3, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.射手1, SpriteKind.旗子1, function (sprite, otherSprite) {
    tiles.setTilemap(tilemap`層級18`)
    射手.setStayInScreen(true)
    蟒蛇的血量 = statusbars.create(20, 4, StatusBarKind.蟒蛇)
    蟒蛇的血量.setColor(8, 2)
    狼的血量 = statusbars.create(20, 4, StatusBarKind.狼)
    狼的血量.setColor(8, 2)
    老虎的血量 = statusbars.create(20, 4, StatusBarKind.老虎)
    老虎的血量.setColor(8, 2)
    info.startCountdown(30)
    旗子.setPosition(630, 90)
    sprite.setPosition(0, 92)
    蟒蛇 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f 7 7 7 7 7 f . . . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . f 7 2 7 7 2 7 7 f . . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . . . f 2 f f f f f . . . . 
        . . . f f 7 2 f 7 7 7 f f . . . 
        . . f 7 7 7 f 7 7 7 7 f 7 f . . 
        . f 7 7 f 7 7 7 7 7 f 7 7 7 f . 
        . f 7 7 7 f f f f f 7 7 7 f 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 f 7 f 
        . . f 7 7 7 7 7 7 7 7 7 f f 7 f 
        . . . f f f f f f f f f . . f . 
        `, SpriteKind.蟒蛇)
    animation.runImageAnimation(
    蟒蛇,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f 7 7 7 7 7 f . . . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . f 7 2 7 7 2 7 7 f . . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . . . f 2 f f f f f . . . . 
        . . . f f 7 2 f 7 7 7 f f . . . 
        . . f 7 7 7 f 7 7 7 7 f 7 f . . 
        . f 7 7 f 7 7 7 7 7 f 7 7 7 f . 
        . f 7 7 7 f f f f f 7 7 7 f 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 f 7 f 
        . . f 7 7 7 7 7 7 7 7 7 f f 7 f 
        . . . f f f f f f f f f . . f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f f f f . . . 
        . . . . . . . f 7 7 7 7 7 f . . 
        . . . . . . . f 7 7 7 7 7 7 f . 
        . . . . . . f 7 2 7 7 2 7 7 f . 
        f f . . . . f 7 7 7 7 7 7 7 7 f 
        f 7 f f . . f f 7 7 7 7 7 7 7 f 
        . f 7 f f . . f 2 f f f f f f f 
        . f 7 7 f f . . 2 f 7 7 7 7 f . 
        . . f 7 7 f f . . f 7 7 7 7 f . 
        . . f 7 7 7 f f f f 7 7 7 7 f . 
        . . . f 7 7 7 7 7 7 7 7 7 7 f . 
        . . . f f f 7 7 7 7 7 7 7 7 f . 
        . . . . . f f f f 7 7 7 f f f . 
        . . . . . . . . f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
    蟒蛇.follow(射手, 30)
    蟒蛇的血量.attachToSprite(蟒蛇, 3, 0)
    蟒蛇.setPosition(randint(70, 380), 92)
    狼 = sprites.create(img`
        ........................
        ........................
        .....ff.ff..............
        .....fcfcf..............
        ....fccccff.............
        ....fc2cccfffffff.......
        ...fccccccccccccfff.....
        ...fccccccccccccccff....
        ....fffccccccccccccf....
        .......fcccccccccccff...
        ......fccffffffcffccf...
        .....ffcfcf..ffcf.fcf...
        .....fccfcf.fcfcf.fcf...
        ....fccffff.ffccf.fff...
        ....ffff.....ffff.ff....
        ........................
        `, SpriteKind.狼)
    animation.runImageAnimation(
    狼,
    [img`
        ........................
        ........................
        .....ff.ff..............
        .....fcfcf..............
        ....fccccff.............
        ....fc2cccfffffff.......
        ...fccccccccccccfff.....
        ...fccccccccccccccff....
        ....fffccccccccccccf....
        .......fcccccccccccff...
        ......fccffffffcffccf...
        .....ffcfcf..ffcf.fcf...
        .....fccfcf.fcfcf.fcf...
        ....fccffff.ffccf.fff...
        ....ffff.....ffff.......
        ........................
        `,img`
        ........................
        ........................
        .....ff.ff..............
        .....fcfcf..............
        ....fccccff.............
        ....fc2cccfffffff.......
        ...fccccccccccccfff.....
        ...f1f1cccccccccccff....
        ....fccccccccccccccf....
        ....ffffcccccccccccff...
        ......fccffffffcffccf...
        .....ffcfcf..ffcf.fcf...
        .....fccfcf.fcfcf.fcf...
        ....fccffff.ffccf.fff...
        ....ffff.....ffff.......
        ........................
        `,img`
        ........................
        ........................
        .....ff.ff..............
        .....fcfcf..............
        ....fccccff.............
        ....fc2cccfffffff.......
        ...fccccccccccccfff.....
        ...fccccccccccccccff....
        ....fffccccccccccccf....
        .......fcccccccccccff...
        ......fccffffffcffccf...
        .....ffcfcf..ffcf.fcf...
        .....fccfcf.fcfcf.fcf...
        ....fccffff.ffccf.fff...
        ....ffff.....ffff.......
        ........................
        `],
    200,
    true
    )
    狼.follow(射手, 30)
    狼的血量.attachToSprite(狼, 3, 0)
    狼.setPosition(randint(70, 380), 92)
    老虎 = sprites.create(img`
        ........................
        .ff....ff...............
        .f4ffff4f...............
        ..ff4f4f................
        .f44444fff..............
        .f42424f4fffffffff......
        .ff444ff44f444f444f.....
        ..f121f444f4f4f4f44f....
        ...fff444444f4f4f444f...
        .....f4f4f44f444f4444f..
        .....f4f4ffffff444ff4f..
        ......f44f4f.f4f44f.f4f.
        .......f4f4fff4ff4f..f4f
        ......ff4ffff11ff4f..f4f
        ......f11f..ffff11f...f.
        ......ffff.....ffff.....
        `, SpriteKind.老虎)
    animation.runImageAnimation(
    老虎,
    [img`
        ........................
        .ff....ff...............
        .f4ffff4f...............
        ..ff4f4f................
        .f44444fff..............
        .f42424f4fffffffff......
        .ff444ff44f444f444f.....
        ..f121f444f4f4f4f44f....
        ...fff444444f4f4f444f...
        .....f4f4f44f444f4444f..
        .....f4f4ffffff444ff4f..
        ......f44f4f.f4f44f.f4f.
        .......f4f4fff4ff4f..f4f
        ......ff4ffff11ff4f..f4f
        ......f11f..ffff11f...f.
        ......ffff.....ffff.....
        `,img`
        ........................
        .ff....ff...............
        .f4ffff4f...............
        ..ff4f4f................
        .f44444fff..............
        .f42424f4fffffffff......
        .ff444ff44f444f444f.....
        ..f121f444f4f4f4f44f....
        ...fff444444f4f4f444f...
        ..f4ff4f4f44f444f4444f..
        ff4f.f4f4ffffff444ff4f..
        14f...f44f...f4f44f.f4f.
        fff....f4f..ff4ff4f..f4f
        ......ff4f..f11ff4f..f4f
        ......f11f..ffff11f...f.
        ......ffff.....ffff.....
        `],
    200,
    true
    )
    老虎.follow(射手, 30)
    老虎的血量.attachToSprite(老虎, 3, 0)
    老虎.setPosition(randint(70, 380), 92)
    金幣 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . f 5 5 f . . . . . f 5 5 f . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.金幣2)
    金幣.setPosition(randint(70, 380), 92)
    元寶 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . f f f . f 5 5 f . f f f . 
        . . . f 5 5 f 5 5 5 5 f 5 5 f . 
        . . . f 5 5 5 f f f f 5 5 5 f . 
        . . . f f 5 5 5 5 5 5 5 5 f f . 
        . . . . f 5 5 5 5 5 5 5 5 f . . 
        . . . . f f 5 5 5 5 5 5 f f . . 
        . . . . . f f 5 5 5 5 f f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.元寶2)
    元寶.setPosition(randint(70, 380), 92)
    生命 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . f f . . . . 
        . . . . f 2 2 f . f 2 2 f . . . 
        . . . f 2 2 2 2 f 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . . f 2 2 2 2 2 2 2 f . . . 
        . . . . . f 2 2 2 2 2 f . . . . 
        . . . . . . f 2 2 2 f . . . . . 
        . . . . . . . f 2 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.生命2)
    生命.setPosition(randint(70, 380), 92)
    旗子.setKind(SpriteKind.旗子2)
    射手.setKind(SpriteKind.射手2)
})
sprites.onOverlap(SpriteKind.射手4, SpriteKind.食人花, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.能量1, SpriteKind.蟒蛇, function (sprite, otherSprite) {
    sprite.destroy()
    蟒蛇的血量.value += -20
})
sprites.onOverlap(SpriteKind.劍士2, SpriteKind.狼, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.魔法師6, SpriteKind.貝殼, function (sprite, otherSprite) {
    魔法師.setKind(SpriteKind.魔法師7)
    game.over(true)
})
sprites.onOverlap(SpriteKind.魔法師6, SpriteKind.魟魚, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.play射手, SpriteKind.向日葵, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    向日葵的血量.value += -50
})
sprites.onOverlap(SpriteKind.play射手, SpriteKind.鯊魚, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    鯊魚的血量.value += -50
})
sprites.onOverlap(SpriteKind.魔法師1, SpriteKind.鬼怪, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.魔法師2, SpriteKind.蟒蛇, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.play劍士, SpriteKind.老虎, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    老虎的血量.value += -100
})
statusbars.onZero(StatusBarKind.食人花, function (status) {
    食人花.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.魔法師2, SpriteKind.旗子2, function (sprite, otherSprite) {
    tiles.setTilemap(tilemap`層級22`)
    魔法師.setStayInScreen(true)
    蜘蛛的血量 = statusbars.create(20, 4, StatusBarKind.蜘蛛)
    蜘蛛的血量.setColor(8, 2)
    螳螂的血量 = statusbars.create(20, 4, StatusBarKind.螳螂)
    螳螂的血量.setColor(8, 2)
    蜜蜂的血量 = statusbars.create(20, 4, StatusBarKind.蜜蜂)
    蜜蜂的血量.setColor(8, 2)
    info.startCountdown(30)
    旗子.setPosition(630, 90)
    sprite.setPosition(0, 92)
    蜘蛛 = sprites.create(img`
        . . f . . . . . . . f . . . . . 
        . . . f f . . . . f . . . f . . 
        . . . . . f . . f . . f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . f f f f f f . f f f . . . 
        . . f . . . f f f f f f f f . . 
        . . . . . f 2 f f f f f f f f . 
        . . . . . . f f f f f f f f f . 
        . . . . . f 2 f f f f f f f f . 
        . . f . . . f f f f f f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . f . . f . . f f . . . 
        . . . f f . . . . f . . . f . . 
        . . f . . . . . . . f . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.蜘蛛)
    animation.runImageAnimation(
    蜘蛛,
    [img`
        . . f . . . . . . . f . . . . . 
        . . . f f . . . . f . . . f . . 
        . . . . . f . . f . . f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . f f f f f f . f f f . . . 
        . . f . . . f f f f f f f f . . 
        . . . . . f 2 f f f f f f f f . 
        . . . . . . f f f f f f f f f . 
        . . . . . f 2 f f f f f f f f . 
        . . f . . . f f f f f f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . f . . f . . f f . . . 
        . . . f f . . . . f . . . f . . 
        . . f . . . . . . . f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . f . . . . . . . f . . . . . 
        . . . f f . . . . f . . . f . . 
        . . . . . f . . f . . f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . f f f f f f . f f f . . . 
        . . f . . . f f f f f f f f . . 
        . . . . . f 2 f f f f f f f f . 
        . . . . . . f f f f f f f f f . 
        . . . . . f 2 f f f f f f f f . 
        . . f . . . f f f f f f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . . f . f . . f f . . . 
        . . . . . . . f . f . . . f . . 
        . . . . . . . f . . f . . . . . 
        . . . . . . . . f . . . . . . . 
        `,img`
        . . . . . . . . f . f . . . . . 
        . . . . . . . f . f . . . f . . 
        . . . . . . f . f . . f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . f f f f f f . f f f . . . 
        . . f . . . f f f f f f f f . . 
        . . . . . f 2 f f f f f f f f . 
        . . . . . . f f f f f f f f f . 
        . . . . . f 2 f f f f f f f f . 
        . . f . . . f f f f f f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . f . . f . . f f . . . 
        . . . f f . . . . f . . . f . . 
        . . f . . . . . . . f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . f . . . . . . . f . . . . . 
        . . . f f . . . . f . . . f . . 
        . . . . . f . . f . . f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . f f f f f f . f f f . . . 
        . . f . . . f f f f f f f f . . 
        . . . . . f 2 f f f f f f f f . 
        . . . . . . f f f f f f f f f . 
        . . . . . f 2 f f f f f f f f . 
        . . f . . . f f f f f f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . f . . f . . f f . . . 
        . . . f f . . f . . . . . f . . 
        . . f . . . f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . f . . . f . . . . . . . . . 
        . . . f f . . f . . . . . f . . 
        . . . . . f . . f . . f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . f f f f f f . f f f . . . 
        . . f . . . f f f f f f f f . . 
        . . . . . f 2 f f f f f f f f . 
        . . . . . . f f f f f f f f f . 
        . . . . . f 2 f f f f f f f f . 
        . . f . . . f f f f f f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . f . . f . . f f . . . 
        . . . f f . . . . f . . . f . . 
        . . f . . . . . . . f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . f . . . . . . . f . . . . . 
        . . . f f . . . . f . . . f . . 
        . . . . . f . . f . . f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . f f f f f f . f f f . . . 
        . . f . . . f f f f f f f f . . 
        . . . . . f 2 f f f f f f f f . 
        . . . . . . f f f f f f f f f . 
        . . . . . f 2 f f f f f f f f . 
        . . f . . . f f f f f f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . f . . f f . . . . . . 
        . . . f f . . f . f . . . . . . 
        . . f . . . . . . . f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . f . . . . . . . f . . . . . 
        . . . f f . . f . f . . . . . . 
        . . . . . f . . f f . . . . . . 
        . . . . . . f . f . f . . . . . 
        . . . f f f f f f . f f f . . . 
        . . f . . . f f f f f f f f . . 
        . . . . . f 2 f f f f f f f f . 
        . . . . . . f f f f f f f f f . 
        . . . . . f 2 f f f f f f f f . 
        . . f . . . f f f f f f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . f . . f . . f f . . . 
        . . . f f . . . . f . . . f . . 
        . . f . . . . . . . f . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
    蜘蛛.follow(魔法師, 30)
    蜘蛛的血量.attachToSprite(蜘蛛, 3, 0)
    蜘蛛.setPosition(randint(70, 380), randint(92, 30))
    螳螂 = sprites.create(img`
        ....ff.ff...............
        .....fff................
        ....27772......f........
        ....f777f..f..ff........
        ..ff.f7f7f.f..ff........
        .f77f.ff77fff.ff........
        .f7fff.ff77fffff........
        .f7f7fffff77777fff......
        .f7f77ff7ff7777777f.....
        ..ff7777ff7ff777777f....
        ..ff7fff.f7f.f7ffffff...
        ...f7f..f7f.ff7f........
        ....f..f7f..f7f.........
        ....f..f7f..f7f.........
        .......f7f..f7f.........
        ........f....f..........
        `, SpriteKind.螳螂)
    animation.runImageAnimation(
    螳螂,
    [img`
        ....ff.ff...............
        .....fff................
        ....27772......f........
        ....f777f..f..ff........
        ..ff.f7f7f.f..ff........
        .f77f.ff77fff.ff........
        .f7fff.ff77fffff........
        .f7f7fffff77777fff......
        .f7f77ff7ff7777777f.....
        ..ff7777ff7ff777777f....
        ..ff7fff.f7f.f7ffffff...
        ...f7f..f7f.ff7f........
        ....f..f7f..f7f.........
        ....f..f7f..f7f.........
        .......f7f..f7f.........
        ........f....f..........
        `,img`
        ....ff.ff...............
        .....fff................
        ....27772......f........
        ....f777f..f..ff........
        ..ff.f7f7f.f..ff........
        .f77f.ff77fff.ff........
        .f7f7f..f77fffff........
        .f7f7fffff77777fff......
        .ff7ff7f.ff7777777f.....
        ..fff7f....ff777777f....
        ...f77f......ffffffff...
        ..f7fff......f77f.f7ff..
        ..fff........ff77f.f77f.
        ...f..........ff77f.ff7f
        ...f............ffff..ff
        ........f........ffff...
        `],
    500,
    true
    )
    螳螂.follow(魔法師, 30)
    螳螂的血量.attachToSprite(螳螂, 3, 0)
    螳螂.setPosition(randint(70, 380), 92)
    蜜蜂 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f . f f f . . . . 
        . f . . f f 1 f f f 1 1 f . . . 
        f 1 f . f 1 1 f 1 1 1 1 f . . . 
        . f f . f 1 1 f 1 1 1 f . . . . 
        . . f f f 1 1 f 1 1 1 f . . . . 
        . f 2 f 5 1 f 1 1 1 f f 5 . . . 
        . f 1 f 5 f 1 1 1 f 5 f 5 5 . . 
        . f f 5 5 f f f f 5 5 f 5 5 5 . 
        f . . . 5 f 5 5 f 5 5 f 5 5 . . 
        . . . . 5 f 5 5 f 5 5 f 5 . . . 
        . . . . . f 5 5 f 5 5 . f . . . 
        . . . . . . f 1 1 f . . . f . . 
        . . . . . . . f 1 1 f . . . . . 
        `, SpriteKind.蜜蜂)
    animation.runImageAnimation(
    蜜蜂,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f . f f f . . . . 
        . f . . f f 1 f f f 1 1 f . . . 
        f . f . f 1 1 f 1 1 1 1 f . . . 
        . f f . f 1 1 f 1 1 1 f . . . . 
        . . f f f 1 1 f 1 1 1 f . . . . 
        . f 2 f 5 1 f 1 1 1 f f 5 . . . 
        . f 1 f 5 f 1 1 1 f 5 f 5 5 . . 
        . f f 5 5 f f f f 5 5 f 5 5 5 f 
        f . . . 5 f 5 5 f 5 5 f 5 5 . . 
        . . . . 5 f 5 5 f 5 5 f 5 . . . 
        . . . . . f 5 5 f 5 5 . f . . . 
        . . . . . . f . . f . . . f . . 
        . . . . . . . f . . f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . f f f . . . . 
        . f . . . . . f f f 1 1 f . . . 
        f . f . . . . f 1 1 1 1 f . . . 
        . f f . . . . f 1 1 1 f . . . . 
        . . f f f . . f 1 1 1 f . . . . 
        . f 2 f 5 f f 1 1 1 f f 5 . . . 
        . f 1 f 5 f 1 1 1 f 5 f 5 5 . . 
        . f f 5 5 f f f f 5 5 f 5 5 5 . 
        f . . . 5 f 5 5 f 5 5 f 5 5 . . 
        . . . . 5 f 5 5 f 5 5 f 5 . . . 
        . . . . . f 5 5 f 5 5 . f . . . 
        . . . . . . f . . f . . . f . . 
        . . . . . . . f . . f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f . . . . . . . . 
        . f . . f f 1 f . . . . . . . . 
        f . f . f 1 1 f . . . . . . . . 
        . f f . f 1 1 f . . . . . . . . 
        . . f f f 1 1 f f f . . . . . . 
        . f 2 f 5 f f 1 1 1 f f 5 . . . 
        . f 1 f 5 f 1 1 1 1 f f 5 5 . . 
        . f f 5 5 f f 1 1 1 f f 5 5 5 . 
        f . . . 5 f 5 f 1 1 f f 5 5 . . 
        . . . . 5 f 5 f 1 1 1 f 5 . . . 
        . . . . . f 5 5 f f f . f . . . 
        . . . . . . f . . f . . . f . . 
        . . . . . . . f . . f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f . f f f . . . . . 
        . . . f 1 1 f f f 1 f f . . f . 
        . . . f 1 1 1 1 f 1 1 f . f . f 
        . . . . f 1 1 1 f 1 1 f . f f . 
        . . . . f 1 1 1 f 1 1 f f f . . 
        . . . 5 f f 1 1 1 f 1 5 f 2 f . 
        . . 5 5 f 5 f 1 1 1 f 5 f 1 f . 
        f 5 5 5 f 5 5 f f f f 5 5 f f . 
        . . 5 5 f 5 5 f 5 5 f 5 . . . f 
        . . . 5 f 5 5 f 5 5 f 5 . . . . 
        . . . f . 5 5 f 5 5 f . . . . . 
        . . f . . . f . . f . . . . . . 
        . . . . . f . . f . . . . . . . 
        `],
    200,
    true
    )
    蜜蜂.follow(魔法師, 30)
    蜜蜂的血量.attachToSprite(蜜蜂, 3, 0)
    蜜蜂.setPosition(randint(70, 380), randint(92, 30))
    金幣 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . f 5 5 f . . . . . f 5 5 f . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.金幣3)
    金幣.setPosition(randint(70, 380), 92)
    元寶 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . f f f . f 5 5 f . f f f . 
        . . . f 5 5 f 5 5 5 5 f 5 5 f . 
        . . . f 5 5 5 f f f f 5 5 5 f . 
        . . . f f 5 5 5 5 5 5 5 5 f f . 
        . . . . f 5 5 5 5 5 5 5 5 f . . 
        . . . . f f 5 5 5 5 5 5 f f . . 
        . . . . . f f 5 5 5 5 f f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.元寶3)
    元寶.setPosition(randint(70, 380), 92)
    生命 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . f f . . . . 
        . . . . f 2 2 f . f 2 2 f . . . 
        . . . f 2 2 2 2 f 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . . f 2 2 2 2 2 2 2 f . . . 
        . . . . . f 2 2 2 2 2 f . . . . 
        . . . . . . f 2 2 2 f . . . . . 
        . . . . . . . f 2 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.生命3)
    生命.setPosition(randint(70, 380), 92)
    旗子.setKind(SpriteKind.旗子3)
    魔法師.setKind(SpriteKind.魔法師3)
})
statusbars.onZero(StatusBarKind.含羞草, function (status) {
    含羞草.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.play射手, SpriteKind.蟒蛇, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    蟒蛇的血量.value += -50
})
sprites.onOverlap(SpriteKind.槍手6, SpriteKind.魟魚, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.能量3, SpriteKind.魟魚, function (sprite, otherSprite) {
    sprite.destroy()
    魟魚的血量.value += -20
})
sprites.onOverlap(SpriteKind.劍士2, SpriteKind.蟒蛇, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.槍手3, SpriteKind.蜜蜂, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.劍士6, SpriteKind.金幣6, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.槍手2, SpriteKind.蟒蛇, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.能量1, SpriteKind.向日葵, function (sprite, otherSprite) {
    sprite.destroy()
    向日葵的血量.value += -20
})
sprites.onOverlap(SpriteKind.魔法師2, SpriteKind.元寶2, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.劍士5, SpriteKind.鯊魚, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.play射手, SpriteKind.鬼怪, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    鬼怪的血量.value += -50
})
sprites.onOverlap(SpriteKind.能量3, SpriteKind.含羞草, function (sprite, otherSprite) {
    sprite.destroy()
    含羞草的血量.value += -20
})
sprites.onOverlap(SpriteKind.能量4, SpriteKind.鯊魚, function (sprite, otherSprite) {
    sprite.destroy()
    鯊魚的血量.value += -20
})
sprites.onOverlap(SpriteKind.射手3, SpriteKind.生命3, function (sprite, otherSprite) {
    music.powerUp.play()
    otherSprite.destroy()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.射手2, SpriteKind.老虎, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.劍士5, SpriteKind.水母, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.射手6, SpriteKind.金幣6, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.射手5, SpriteKind.金幣5, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.能量2, SpriteKind.蟒蛇, function (sprite, otherSprite) {
    sprite.destroy()
    蟒蛇的血量.value += -20
})
sprites.onOverlap(SpriteKind.能量3, SpriteKind.鯊魚, function (sprite, otherSprite) {
    sprite.destroy()
    鯊魚的血量.value += -20
})
sprites.onOverlap(SpriteKind.play魔法師, SpriteKind.蝙蝠, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    蝙蝠的血量.value += -30
})
sprites.onOverlap(SpriteKind.player箭頭, SpriteKind.player槍手, function (sprite, otherSprite) {
    箭頭.destroy()
    劍士.destroy()
    射手.destroy()
    魔法師.destroy()
    槍手.destroy()
    槍手 = sprites.create(img`
        ........................
        .......fff..............
        ......feeef.............
        ....ffeeeefff...........
        ...fefeeeefeff..........
        ..feeffeeffeeef.........
        ..feeeffffeeeef.........
        ..ffeeeeeeeeef..........
        ...fffffffffff..........
        ....555555ddd...........
        ....55d551fdd......f....
        .....5d5d1fdd...fffff...
        .....5ddddddd..fffe.....
        .....ffffffffffddf......
        ....feeeeeeeeefdf.......
        ...feeeeeeeeefff........
        ..feeeeeeeeeff..........
        .fddffeeeeeef...........
        .fff.feeeeeef...........
        .fe...ffffff............
        ff....eeeeee............
        .f....ee..ee............
        ......ff..ff............
        ......fff.fff...........
        `, SpriteKind.player槍手)
    槍手.setPosition(60, 85)
    scene.cameraFollowSprite(槍手)
    槍手.say("我叫Aramis")
    pause(1000)
    槍手.say("攻擊怪物時")
    pause(1000)
    槍手.say("請按\"B下\"")
    pause(1500)
    槍手.say("我的大招可以提升移動以及攻擊速度")
    pause(4000)
    槍手.say("使用大招時")
    pause(1000)
    槍手.say("請按\"上下上下\"", 2000)
    pause(1000)
    controller.moveSprite(槍手, 100, 0)
})
sprites.onOverlap(SpriteKind.能量2, SpriteKind.螳螂, function (sprite, otherSprite) {
    sprite.destroy()
    螳螂的血量.value += -20
})
sprites.onOverlap(SpriteKind.射手2, SpriteKind.旗子2, function (sprite, otherSprite) {
    tiles.setTilemap(tilemap`層級22`)
    射手.setStayInScreen(true)
    蜘蛛的血量 = statusbars.create(20, 4, StatusBarKind.蜘蛛)
    蜘蛛的血量.setColor(8, 2)
    螳螂的血量 = statusbars.create(20, 4, StatusBarKind.螳螂)
    螳螂的血量.setColor(8, 2)
    蜜蜂的血量 = statusbars.create(20, 4, StatusBarKind.蜜蜂)
    蜜蜂的血量.setColor(8, 2)
    info.startCountdown(30)
    旗子.setPosition(630, 90)
    sprite.setPosition(0, 92)
    蜘蛛 = sprites.create(img`
        . . f . . . . . . . f . . . . . 
        . . . f f . . . . f . . . f . . 
        . . . . . f . . f . . f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . f f f f f f . f f f . . . 
        . . f . . . f f f f f f f f . . 
        . . . . . f 2 f f f f f f f f . 
        . . . . . . f f f f f f f f f . 
        . . . . . f 2 f f f f f f f f . 
        . . f . . . f f f f f f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . f . . f . . f f . . . 
        . . . f f . . . . f . . . f . . 
        . . f . . . . . . . f . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.蜘蛛)
    animation.runImageAnimation(
    蜘蛛,
    [img`
        . . f . . . . . . . f . . . . . 
        . . . f f . . . . f . . . f . . 
        . . . . . f . . f . . f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . f f f f f f . f f f . . . 
        . . f . . . f f f f f f f f . . 
        . . . . . f 2 f f f f f f f f . 
        . . . . . . f f f f f f f f f . 
        . . . . . f 2 f f f f f f f f . 
        . . f . . . f f f f f f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . f . . f . . f f . . . 
        . . . f f . . . . f . . . f . . 
        . . f . . . . . . . f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . f . . . . . . . f . . . . . 
        . . . f f . . . . f . . . f . . 
        . . . . . f . . f . . f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . f f f f f f . f f f . . . 
        . . f . . . f f f f f f f f . . 
        . . . . . f 2 f f f f f f f f . 
        . . . . . . f f f f f f f f f . 
        . . . . . f 2 f f f f f f f f . 
        . . f . . . f f f f f f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . . f . f . . f f . . . 
        . . . . . . . f . f . . . f . . 
        . . . . . . . f . . f . . . . . 
        . . . . . . . . f . . . . . . . 
        `,img`
        . . . . . . . . f . f . . . . . 
        . . . . . . . f . f . . . f . . 
        . . . . . . f . f . . f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . f f f f f f . f f f . . . 
        . . f . . . f f f f f f f f . . 
        . . . . . f 2 f f f f f f f f . 
        . . . . . . f f f f f f f f f . 
        . . . . . f 2 f f f f f f f f . 
        . . f . . . f f f f f f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . f . . f . . f f . . . 
        . . . f f . . . . f . . . f . . 
        . . f . . . . . . . f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . f . . . . . . . f . . . . . 
        . . . f f . . . . f . . . f . . 
        . . . . . f . . f . . f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . f f f f f f . f f f . . . 
        . . f . . . f f f f f f f f . . 
        . . . . . f 2 f f f f f f f f . 
        . . . . . . f f f f f f f f f . 
        . . . . . f 2 f f f f f f f f . 
        . . f . . . f f f f f f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . f . . f . . f f . . . 
        . . . f f . . f . . . . . f . . 
        . . f . . . f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . f . . . f . . . . . . . . . 
        . . . f f . . f . . . . . f . . 
        . . . . . f . . f . . f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . f f f f f f . f f f . . . 
        . . f . . . f f f f f f f f . . 
        . . . . . f 2 f f f f f f f f . 
        . . . . . . f f f f f f f f f . 
        . . . . . f 2 f f f f f f f f . 
        . . f . . . f f f f f f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . f . . f . . f f . . . 
        . . . f f . . . . f . . . f . . 
        . . f . . . . . . . f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . f . . . . . . . f . . . . . 
        . . . f f . . . . f . . . f . . 
        . . . . . f . . f . . f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . f f f f f f . f f f . . . 
        . . f . . . f f f f f f f f . . 
        . . . . . f 2 f f f f f f f f . 
        . . . . . . f f f f f f f f f . 
        . . . . . f 2 f f f f f f f f . 
        . . f . . . f f f f f f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . f . . f f . . . . . . 
        . . . f f . . f . f . . . . . . 
        . . f . . . . . . . f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . f . . . . . . . f . . . . . 
        . . . f f . . f . f . . . . . . 
        . . . . . f . . f f . . . . . . 
        . . . . . . f . f . f . . . . . 
        . . . f f f f f f . f f f . . . 
        . . f . . . f f f f f f f f . . 
        . . . . . f 2 f f f f f f f f . 
        . . . . . . f f f f f f f f f . 
        . . . . . f 2 f f f f f f f f . 
        . . f . . . f f f f f f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . f . . f . . f f . . . 
        . . . f f . . . . f . . . f . . 
        . . f . . . . . . . f . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
    蜘蛛.follow(射手, 30)
    蜘蛛的血量.attachToSprite(蜘蛛, 3, 0)
    蜘蛛.setPosition(randint(70, 380), randint(92, 30))
    螳螂 = sprites.create(img`
        ....ff.ff...............
        .....fff................
        ....27772......f........
        ....f777f..f..ff........
        ..ff.f7f7f.f..ff........
        .f77f.ff77fff.ff........
        .f7fff.ff77fffff........
        .f7f7fffff77777fff......
        .f7f77ff7ff7777777f.....
        ..ff7777ff7ff777777f....
        ..ff7fff.f7f.f7ffffff...
        ...f7f..f7f.ff7f........
        ....f..f7f..f7f.........
        ....f..f7f..f7f.........
        .......f7f..f7f.........
        ........f....f..........
        `, SpriteKind.螳螂)
    animation.runImageAnimation(
    螳螂,
    [img`
        ....ff.ff...............
        .....fff................
        ....27772......f........
        ....f777f..f..ff........
        ..ff.f7f7f.f..ff........
        .f77f.ff77fff.ff........
        .f7fff.ff77fffff........
        .f7f7fffff77777fff......
        .f7f77ff7ff7777777f.....
        ..ff7777ff7ff777777f....
        ..ff7fff.f7f.f7ffffff...
        ...f7f..f7f.ff7f........
        ....f..f7f..f7f.........
        ....f..f7f..f7f.........
        .......f7f..f7f.........
        ........f....f..........
        `,img`
        ....ff.ff...............
        .....fff................
        ....27772......f........
        ....f777f..f..ff........
        ..ff.f7f7f.f..ff........
        .f77f.ff77fff.ff........
        .f7f7f..f77fffff........
        .f7f7fffff77777fff......
        .ff7ff7f.ff7777777f.....
        ..fff7f....ff777777f....
        ...f77f......ffffffff...
        ..f7fff......f77f.f7ff..
        ..fff........ff77f.f77f.
        ...f..........ff77f.ff7f
        ...f............ffff..ff
        ........f........ffff...
        `],
    500,
    true
    )
    螳螂.follow(射手, 30)
    螳螂的血量.attachToSprite(螳螂, 3, 0)
    螳螂.setPosition(randint(70, 380), 92)
    蜜蜂 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f . f f f . . . . 
        . f . . f f 1 f f f 1 1 f . . . 
        f 1 f . f 1 1 f 1 1 1 1 f . . . 
        . f f . f 1 1 f 1 1 1 f . . . . 
        . . f f f 1 1 f 1 1 1 f . . . . 
        . f 2 f 5 1 f 1 1 1 f f 5 . . . 
        . f 1 f 5 f 1 1 1 f 5 f 5 5 . . 
        . f f 5 5 f f f f 5 5 f 5 5 5 . 
        f . . . 5 f 5 5 f 5 5 f 5 5 . . 
        . . . . 5 f 5 5 f 5 5 f 5 . . . 
        . . . . . f 5 5 f 5 5 . f . . . 
        . . . . . . f 1 1 f . . . f . . 
        . . . . . . . f 1 1 f . . . . . 
        `, SpriteKind.蜜蜂)
    animation.runImageAnimation(
    蜜蜂,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f . f f f . . . . 
        . f . . f f 1 f f f 1 1 f . . . 
        f . f . f 1 1 f 1 1 1 1 f . . . 
        . f f . f 1 1 f 1 1 1 f . . . . 
        . . f f f 1 1 f 1 1 1 f . . . . 
        . f 2 f 5 1 f 1 1 1 f f 5 . . . 
        . f 1 f 5 f 1 1 1 f 5 f 5 5 . . 
        . f f 5 5 f f f f 5 5 f 5 5 5 f 
        f . . . 5 f 5 5 f 5 5 f 5 5 . . 
        . . . . 5 f 5 5 f 5 5 f 5 . . . 
        . . . . . f 5 5 f 5 5 . f . . . 
        . . . . . . f . . f . . . f . . 
        . . . . . . . f . . f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . f f f . . . . 
        . f . . . . . f f f 1 1 f . . . 
        f . f . . . . f 1 1 1 1 f . . . 
        . f f . . . . f 1 1 1 f . . . . 
        . . f f f . . f 1 1 1 f . . . . 
        . f 2 f 5 f f 1 1 1 f f 5 . . . 
        . f 1 f 5 f 1 1 1 f 5 f 5 5 . . 
        . f f 5 5 f f f f 5 5 f 5 5 5 . 
        f . . . 5 f 5 5 f 5 5 f 5 5 . . 
        . . . . 5 f 5 5 f 5 5 f 5 . . . 
        . . . . . f 5 5 f 5 5 . f . . . 
        . . . . . . f . . f . . . f . . 
        . . . . . . . f . . f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f . . . . . . . . 
        . f . . f f 1 f . . . . . . . . 
        f . f . f 1 1 f . . . . . . . . 
        . f f . f 1 1 f . . . . . . . . 
        . . f f f 1 1 f f f . . . . . . 
        . f 2 f 5 f f 1 1 1 f f 5 . . . 
        . f 1 f 5 f 1 1 1 1 f f 5 5 . . 
        . f f 5 5 f f 1 1 1 f f 5 5 5 . 
        f . . . 5 f 5 f 1 1 f f 5 5 . . 
        . . . . 5 f 5 f 1 1 1 f 5 . . . 
        . . . . . f 5 5 f f f . f . . . 
        . . . . . . f . . f . . . f . . 
        . . . . . . . f . . f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f . f f f . . . . . 
        . . . f 1 1 f f f 1 f f . . f . 
        . . . f 1 1 1 1 f 1 1 f . f . f 
        . . . . f 1 1 1 f 1 1 f . f f . 
        . . . . f 1 1 1 f 1 1 f f f . . 
        . . . 5 f f 1 1 1 f 1 5 f 2 f . 
        . . 5 5 f 5 f 1 1 1 f 5 f 1 f . 
        f 5 5 5 f 5 5 f f f f 5 5 f f . 
        . . 5 5 f 5 5 f 5 5 f 5 . . . f 
        . . . 5 f 5 5 f 5 5 f 5 . . . . 
        . . . f . 5 5 f 5 5 f . . . . . 
        . . f . . . f . . f . . . . . . 
        . . . . . f . . f . . . . . . . 
        `],
    200,
    true
    )
    蜜蜂.follow(射手, 30)
    蜜蜂的血量.attachToSprite(蜜蜂, 3, 0)
    蜜蜂.setPosition(randint(70, 380), randint(92, 30))
    金幣 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . f 5 5 f . . . . . f 5 5 f . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.金幣3)
    金幣.setPosition(randint(70, 380), 92)
    元寶 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . f f f . f 5 5 f . f f f . 
        . . . f 5 5 f 5 5 5 5 f 5 5 f . 
        . . . f 5 5 5 f f f f 5 5 5 f . 
        . . . f f 5 5 5 5 5 5 5 5 f f . 
        . . . . f 5 5 5 5 5 5 5 5 f . . 
        . . . . f f 5 5 5 5 5 5 f f . . 
        . . . . . f f 5 5 5 5 f f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.元寶3)
    元寶.setPosition(randint(70, 380), 92)
    生命 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . f f . . . . 
        . . . . f 2 2 f . f 2 2 f . . . 
        . . . f 2 2 2 2 f 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . . f 2 2 2 2 2 2 2 f . . . 
        . . . . . f 2 2 2 2 2 f . . . . 
        . . . . . . f 2 2 2 f . . . . . 
        . . . . . . . f 2 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.生命3)
    生命.setPosition(randint(70, 380), 92)
    旗子.setKind(SpriteKind.旗子3)
    射手.setKind(SpriteKind.射手3)
})
sprites.onOverlap(SpriteKind.射手4, SpriteKind.生命4, function (sprite, otherSprite) {
    otherSprite.destroy()
    music.powerUp.play()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.play射手, SpriteKind.食人花, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    食人花的血量.value += -50
})
sprites.onOverlap(SpriteKind.play魔法師, SpriteKind.向日葵, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    向日葵的血量.value += -25
})
sprites.onOverlap(SpriteKind.槍手4, SpriteKind.含羞草, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.能量1, SpriteKind.蝙蝠, function (sprite, otherSprite) {
    sprite.destroy()
    蝙蝠的血量.value += -20
})
sprites.onOverlap(SpriteKind.槍手6, SpriteKind.元寶6, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.槍手5, SpriteKind.寶箱2, function (sprite, otherSprite) {
    music.jumpUp.play()
    otherSprite.destroy()
    info.changeScoreBy(3)
})
sprites.onOverlap(SpriteKind.劍士5, SpriteKind.寶箱2, function (sprite, otherSprite) {
    music.jumpUp.play()
    otherSprite.destroy()
    info.changeScoreBy(3)
})
sprites.onOverlap(SpriteKind.能量3, SpriteKind.狼, function (sprite, otherSprite) {
    sprite.destroy()
    狼的血量.value += -20
})
sprites.onOverlap(SpriteKind.劍士6, SpriteKind.魟魚, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
statusbars.onZero(StatusBarKind.狼, function (status) {
    狼.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.射手6, SpriteKind.龍, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.劍士4, SpriteKind.寶箱, function (sprite, otherSprite) {
    music.jumpUp.play()
    otherSprite.destroy()
    info.changeScoreBy(3)
})
sprites.onOverlap(SpriteKind.槍手5, SpriteKind.魟魚, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.劍士2, SpriteKind.生命2, function (sprite, otherSprite) {
    music.powerUp.play()
    otherSprite.destroy()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.能量4, SpriteKind.蝙蝠, function (sprite, otherSprite) {
    sprite.destroy()
    蝙蝠的血量.value += -20
})
sprites.onOverlap(SpriteKind.劍士6, SpriteKind.鯊魚, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.魔法師3, SpriteKind.生命3, function (sprite, otherSprite) {
    music.powerUp.play()
    otherSprite.destroy()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.射手4, SpriteKind.寶箱, function (sprite, otherSprite) {
    music.jumpUp.play()
    otherSprite.destroy()
    info.changeScoreBy(3)
})
sprites.onOverlap(SpriteKind.能量1, SpriteKind.蜘蛛, function (sprite, otherSprite) {
    sprite.destroy()
    蜘蛛的血量.value += -20
})
sprites.onOverlap(SpriteKind.劍士6, SpriteKind.水母, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.能量2, SpriteKind.蜜蜂, function (sprite, otherSprite) {
    sprite.destroy()
    蜜蜂的血量.value += -20
})
sprites.onOverlap(SpriteKind.play射手, SpriteKind.含羞草, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    含羞草的血量.value += -50
})
sprites.onOverlap(SpriteKind.play槍手, SpriteKind.蝙蝠, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    蝙蝠的血量.value += -20
})
sprites.onOverlap(SpriteKind.能量4, SpriteKind.魟魚, function (sprite, otherSprite) {
    sprite.destroy()
    魟魚的血量.value += -20
})
sprites.onOverlap(SpriteKind.能量2, SpriteKind.老虎, function (sprite, otherSprite) {
    sprite.destroy()
    老虎的血量.value += -20
})
sprites.onOverlap(SpriteKind.能量4, SpriteKind.狼, function (sprite, otherSprite) {
    sprite.destroy()
    狼的血量.value += -20
})
sprites.onOverlap(SpriteKind.劍士3, SpriteKind.蜜蜂, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.槍手4, SpriteKind.金幣4, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.能量4, SpriteKind.向日葵, function (sprite, otherSprite) {
    sprite.destroy()
    向日葵的血量.value += -20
})
sprites.onOverlap(SpriteKind.魔法師5, SpriteKind.金幣5, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.槍手2, SpriteKind.元寶2, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.魔法師1, SpriteKind.旗子1, function (sprite, otherSprite) {
    tiles.setTilemap(tilemap`層級18`)
    魔法師.setStayInScreen(true)
    蟒蛇的血量 = statusbars.create(20, 4, StatusBarKind.蟒蛇)
    蟒蛇的血量.setColor(8, 2)
    狼的血量 = statusbars.create(20, 4, StatusBarKind.狼)
    狼的血量.setColor(8, 2)
    老虎的血量 = statusbars.create(20, 4, StatusBarKind.老虎)
    老虎的血量.setColor(8, 2)
    info.startCountdown(30)
    旗子.setPosition(630, 90)
    sprite.setPosition(0, 92)
    蟒蛇 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f 7 7 7 7 7 f . . . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . f 7 2 7 7 2 7 7 f . . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . . . f 2 f f f f f . . . . 
        . . . f f 7 2 f 7 7 7 f f . . . 
        . . f 7 7 7 f 7 7 7 7 f 7 f . . 
        . f 7 7 f 7 7 7 7 7 f 7 7 7 f . 
        . f 7 7 7 f f f f f 7 7 7 f 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 f 7 f 
        . . f 7 7 7 7 7 7 7 7 7 f f 7 f 
        . . . f f f f f f f f f . . f . 
        `, SpriteKind.蟒蛇)
    animation.runImageAnimation(
    蟒蛇,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f 7 7 7 7 7 f . . . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . f 7 2 7 7 2 7 7 f . . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . . . f 2 f f f f f . . . . 
        . . . f f 7 2 f 7 7 7 f f . . . 
        . . f 7 7 7 f 7 7 7 7 f 7 f . . 
        . f 7 7 f 7 7 7 7 7 f 7 7 7 f . 
        . f 7 7 7 f f f f f 7 7 7 f 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 f 7 f 
        . . f 7 7 7 7 7 7 7 7 7 f f 7 f 
        . . . f f f f f f f f f . . f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f f f f . . . 
        . . . . . . . f 7 7 7 7 7 f . . 
        . . . . . . . f 7 7 7 7 7 7 f . 
        . . . . . . f 7 2 7 7 2 7 7 f . 
        f f . . . . f 7 7 7 7 7 7 7 7 f 
        f 7 f f . . f f 7 7 7 7 7 7 7 f 
        . f 7 f f . . f 2 f f f f f f f 
        . f 7 7 f f . . 2 f 7 7 7 7 f . 
        . . f 7 7 f f . . f 7 7 7 7 f . 
        . . f 7 7 7 f f f f 7 7 7 7 f . 
        . . . f 7 7 7 7 7 7 7 7 7 7 f . 
        . . . f f f 7 7 7 7 7 7 7 7 f . 
        . . . . . f f f f 7 7 7 f f f . 
        . . . . . . . . f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
    蟒蛇.follow(魔法師, 30)
    蟒蛇的血量.attachToSprite(蟒蛇, 3, 0)
    蟒蛇.setPosition(randint(70, 380), 92)
    狼 = sprites.create(img`
        ........................
        ........................
        .....ff.ff..............
        .....fcfcf..............
        ....fccccff.............
        ....fc2cccfffffff.......
        ...fccccccccccccfff.....
        ...fccccccccccccccff....
        ....fffccccccccccccf....
        .......fcccccccccccff...
        ......fccffffffcffccf...
        .....ffcfcf..ffcf.fcf...
        .....fccfcf.fcfcf.fcf...
        ....fccffff.ffccf.fff...
        ....ffff.....ffff.ff....
        ........................
        `, SpriteKind.狼)
    animation.runImageAnimation(
    狼,
    [img`
        ........................
        ........................
        .....ff.ff..............
        .....fcfcf..............
        ....fccccff.............
        ....fc2cccfffffff.......
        ...fccccccccccccfff.....
        ...fccccccccccccccff....
        ....fffccccccccccccf....
        .......fcccccccccccff...
        ......fccffffffcffccf...
        .....ffcfcf..ffcf.fcf...
        .....fccfcf.fcfcf.fcf...
        ....fccffff.ffccf.fff...
        ....ffff.....ffff.......
        ........................
        `,img`
        ........................
        ........................
        .....ff.ff..............
        .....fcfcf..............
        ....fccccff.............
        ....fc2cccfffffff.......
        ...fccccccccccccfff.....
        ...f1f1cccccccccccff....
        ....fccccccccccccccf....
        ....ffffcccccccccccff...
        ......fccffffffcffccf...
        .....ffcfcf..ffcf.fcf...
        .....fccfcf.fcfcf.fcf...
        ....fccffff.ffccf.fff...
        ....ffff.....ffff.......
        ........................
        `,img`
        ........................
        ........................
        .....ff.ff..............
        .....fcfcf..............
        ....fccccff.............
        ....fc2cccfffffff.......
        ...fccccccccccccfff.....
        ...fccccccccccccccff....
        ....fffccccccccccccf....
        .......fcccccccccccff...
        ......fccffffffcffccf...
        .....ffcfcf..ffcf.fcf...
        .....fccfcf.fcfcf.fcf...
        ....fccffff.ffccf.fff...
        ....ffff.....ffff.......
        ........................
        `],
    200,
    true
    )
    狼.follow(魔法師, 30)
    狼的血量.attachToSprite(狼, 3, 0)
    狼.setPosition(randint(70, 380), 92)
    老虎 = sprites.create(img`
        ........................
        .ff....ff...............
        .f4ffff4f...............
        ..ff4f4f................
        .f44444fff..............
        .f42424f4fffffffff......
        .ff444ff44f444f444f.....
        ..f121f444f4f4f4f44f....
        ...fff444444f4f4f444f...
        .....f4f4f44f444f4444f..
        .....f4f4ffffff444ff4f..
        ......f44f4f.f4f44f.f4f.
        .......f4f4fff4ff4f..f4f
        ......ff4ffff11ff4f..f4f
        ......f11f..ffff11f...f.
        ......ffff.....ffff.....
        `, SpriteKind.老虎)
    animation.runImageAnimation(
    老虎,
    [img`
        ........................
        .ff....ff...............
        .f4ffff4f...............
        ..ff4f4f................
        .f44444fff..............
        .f42424f4fffffffff......
        .ff444ff44f444f444f.....
        ..f121f444f4f4f4f44f....
        ...fff444444f4f4f444f...
        .....f4f4f44f444f4444f..
        .....f4f4ffffff444ff4f..
        ......f44f4f.f4f44f.f4f.
        .......f4f4fff4ff4f..f4f
        ......ff4ffff11ff4f..f4f
        ......f11f..ffff11f...f.
        ......ffff.....ffff.....
        `,img`
        ........................
        .ff....ff...............
        .f4ffff4f...............
        ..ff4f4f................
        .f44444fff..............
        .f42424f4fffffffff......
        .ff444ff44f444f444f.....
        ..f121f444f4f4f4f44f....
        ...fff444444f4f4f444f...
        ..f4ff4f4f44f444f4444f..
        ff4f.f4f4ffffff444ff4f..
        14f...f44f...f4f44f.f4f.
        fff....f4f..ff4ff4f..f4f
        ......ff4f..f11ff4f..f4f
        ......f11f..ffff11f...f.
        ......ffff.....ffff.....
        `],
    200,
    true
    )
    老虎.follow(魔法師, 30)
    老虎的血量.attachToSprite(老虎, 3, 0)
    老虎.setPosition(randint(70, 380), 92)
    金幣 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . f 5 5 f . . . . . f 5 5 f . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.金幣2)
    金幣.setPosition(randint(70, 380), 92)
    元寶 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . f f f . f 5 5 f . f f f . 
        . . . f 5 5 f 5 5 5 5 f 5 5 f . 
        . . . f 5 5 5 f f f f 5 5 5 f . 
        . . . f f 5 5 5 5 5 5 5 5 f f . 
        . . . . f 5 5 5 5 5 5 5 5 f . . 
        . . . . f f 5 5 5 5 5 5 f f . . 
        . . . . . f f 5 5 5 5 f f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.元寶2)
    元寶.setPosition(randint(70, 380), 92)
    生命 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . f f . . . . 
        . . . . f 2 2 f . f 2 2 f . . . 
        . . . f 2 2 2 2 f 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . . f 2 2 2 2 2 2 2 f . . . 
        . . . . . f 2 2 2 2 2 f . . . . 
        . . . . . . f 2 2 2 f . . . . . 
        . . . . . . . f 2 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.生命2)
    生命.setPosition(randint(70, 380), 92)
    旗子.setKind(SpriteKind.旗子2)
    魔法師.setKind(SpriteKind.魔法師2)
})
statusbars.onZero(StatusBarKind.魟魚, function (status) {
    魟魚.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.劍士1, SpriteKind.蝙蝠, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.槍手3, SpriteKind.旗子3, function (sprite, otherSprite) {
    tiles.setTilemap(tilemap`層級26`)
    槍手.setStayInScreen(true)
    食人花的血量 = statusbars.create(20, 4, StatusBarKind.食人花)
    食人花的血量.setColor(8, 2)
    向日葵的血量 = statusbars.create(20, 4, StatusBarKind.向日葵)
    向日葵的血量.setColor(8, 2)
    含羞草的血量 = statusbars.create(20, 4, StatusBarKind.含羞草)
    含羞草的血量.setColor(8, 2)
    info.startCountdown(30)
    旗子.setPosition(630, 90)
    sprite.setPosition(0, 92)
    食人花 = sprites.create(img`
        . . . f 1 1 f 1 1 f 1 1 f . . . 
        . . . . f 1 1 f f 1 1 f . . . . 
        . . . f 1 f 1 1 1 1 f 2 f . . . 
        . . . f 2 2 f 1 1 f 2 2 f . . . 
        . . f 2 2 1 1 f f 2 2 2 1 f . . 
        . . f 2 2 1 1 2 2 1 1 2 2 f . . 
        . . . f 2 2 2 2 2 1 1 2 f . . . 
        . . . . f f 1 2 2 2 f f . . . . 
        . f f . . . f f f f . . . f f . 
        f 7 7 f f . f 7 7 f . f f 7 7 f 
        f 7 7 7 7 f f 7 7 f f 7 7 7 7 f 
        f 7 7 f 7 7 f 7 7 f 7 7 f 7 7 f 
        . f 7 7 f 7 f 7 7 f 7 f 7 7 f . 
        . . f f 7 f f 7 7 f f 7 f f . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . . . . f 7 7 f . . . . . . 
        `, SpriteKind.食人花)
    animation.runImageAnimation(
    食人花,
    [img`
        . . . f 1 1 f . . f 1 1 f . . . 
        . . . . f 1 1 f f 1 1 f . . . . 
        . . . f 1 f 1 1 1 1 f 2 f . . . 
        . . . f 2 2 f 1 1 f 2 2 f . . . 
        . . f 2 2 1 1 f f 2 2 2 1 f . . 
        . . f 2 2 1 1 2 2 1 1 2 2 f . . 
        . . . f 2 2 2 2 2 1 1 2 f . . . 
        . . . . f f 1 2 2 2 f f . . . . 
        . f f . . . f f f f . . . f f . 
        f 7 7 f f . f 7 7 f . f f 7 7 f 
        f 7 7 7 7 f f 7 7 f f 7 7 7 7 f 
        f 7 7 f 7 7 f 7 7 f 7 7 f 7 7 f 
        . f 7 7 f 7 f 7 7 f 7 f 7 7 f . 
        . . f f 7 f f 7 7 f f 7 f f . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . . . . f 7 7 f . . . . . . 
        `,img`
        . . . . . . f f . f f f f . . . 
        . . . . . . f 1 f 2 2 2 1 f . . 
        . . . . . . f 1 1 f 2 2 2 f . . 
        . . . . . . . f 1 1 f 2 1 1 f . 
        . . . . . . . . f 1 f 2 1 1 f . 
        . . . . . . . f 1 1 f 1 2 2 f . 
        . . . . . . f 1 1 f 1 1 2 f . . 
        . . . . . . f 1 f 1 2 2 2 f . . 
        . . . . . . f f . f f f f . . . 
        . . . . f f . . . . f 7 7 f . . 
        . . . f 7 7 f . . . f 7 7 f f f 
        . . . f 7 7 7 f . f 7 7 f f 7 7 
        . . . . f f 7 7 f f 7 7 f 7 7 f 
        . . . . . . f f 7 7 7 f f f f . 
        . . . . . . f 7 7 7 f f . . . . 
        . . . . . . f 7 7 f . . . . . . 
        `,img`
        . . . . . . f f . f f f f . . . 
        . . . . . . f 1 f 2 2 2 1 f . . 
        . . . . . . f 1 1 f 2 2 2 f . . 
        . . . . . . . f 1 1 f 2 1 1 f . 
        . . . . . . . 4 f 1 f 2 1 1 f . 
        . . . . . . . f 1 1 f 1 2 2 f . 
        . . . . . . f 1 1 f 1 1 2 f . . 
        . . . . . . f 1 f 1 2 2 2 f . . 
        . . . . . . f f . f f f f . . . 
        . . . . f f . . . . f 7 7 f . . 
        . . . f 7 7 f . . . f 7 7 f f f 
        . . . f 7 7 7 f . f 7 7 f f 7 7 
        . . . . f f 7 7 f f 7 7 f 7 7 f 
        . . . . . . f f 7 7 7 f f f f . 
        . . . . . . f 7 7 7 f f . . . . 
        . . . . . . f 7 7 f . . . . . . 
        `,img`
        . . . . . . f f . f f f f . . . 
        . . . . . . f 1 f 2 2 2 1 f . . 
        . . . . . . f 1 1 f 2 2 2 f . . 
        . . . . . . . f 1 1 f 2 1 1 f . 
        . . . . 4 . . . f 1 f 2 1 1 f . 
        . . . . . . . f 1 1 f 1 2 2 f . 
        . . . . . . f 1 1 f 1 1 2 f . . 
        . . . . . . f 1 f 1 2 2 2 f . . 
        . . . . . . f f . f f f f . . . 
        . . . . f f . . . . f 7 7 f . . 
        . . . f 7 7 f . . . f 7 7 f f f 
        . . . f 7 7 7 f . f 7 7 f f 7 7 
        . . . . f f 7 7 f f 7 7 f 7 7 f 
        . . . . . . f f 7 7 7 f f f f . 
        . . . . . . f 7 7 7 f f . . . . 
        . . . . . . f 7 7 f . . . . . . 
        `],
    500,
    true
    )
    食人花的血量.attachToSprite(食人花, 3, 0)
    食人花.setPosition(randint(70, 380), 92)
    向日葵 = sprites.create(img`
        .......f5555f...fffff...
        ......f555555fff55555f..
        ..fffff55555555555555f..
        .f5555f55eeeeee555555f..
        f555555eee4444eee5555f..
        f55555ee44444444ee555f..
        f55555e4444444444e55f...
        ff555ee4444444444ee5f...
        .fff5e444244442444e55ff.
        ..f55e444444444444e5555f
        .f555e444444444444e55555
        f5555e444222222444e55555
        f5555ee442ffff244ee55555
        f55555e4422222244e55555f
        f55555ee44444444ee5555f.
        .f55555eee4444eee5555f..
        ..fff5555eeeeee55555f...
        .....f55555ee5555555f...
        .....f55555eef555555f...
        .....f5555fee.f55555f...
        ......f777.ee.777fff....
        ......77777ee77777......
        ......777777777777......
        .......7777777777.......
        `, SpriteKind.向日葵)
    animation.runImageAnimation(
    向日葵,
    [img`
        .......f5555f...fffff...
        ......f555555fff55555f..
        ..fffff55555555555555f..
        .f5555f55eeeeee555555f..
        f555555eee4444eee5555f..
        f55555ee44444444ee555f..
        f55555e4444444444e55f...
        ff555ee4444444444ee5f...
        .fff5e444244442444e55ff.
        ..f55e444444444444e5555f
        .f555e444444444444e55555
        f5555e444222222444e55555
        f5555ee442ffff244ee55555
        f55555e4422222244e55555f
        f55555ee44444444ee5555f.
        .f55555eee4444eee5555f..
        ..fff5555eeeeee55555f...
        .....f55555ee5555555f...
        .....f55555eef555555f...
        .....f5555fee.f55555f...
        ......f777.ee.777fff....
        ......77777ee77777......
        ......777777777777......
        .......7777777777.......
        `,img`
        ..ee...f5555f.e.fffff.e.
        e....ef555555fff55555f..
        ..fffff55555555555555f.e
        .f5555f55eeeeee555555f..
        f555555eee4444eee5555f.e
        f55555ee44444444ee555f..
        f55555e4444444444e55f.e.
        ff555ee4444444444ee5f...
        .fff5e444244442444e55ff.
        ..f55e444444444444e5555f
        .f555e444444444444e55555
        f5555e444442224444e55555
        f5555ee44442f2444ee55555
        f55555e4444222444e55555f
        f55555ee44444444ee5555f.
        .f55555eee4444eee5555f..
        ..fff5555eeeeee55555f..e
        e..e.f55555ee5555555fe..
        .....f55555eef555555f...
        ..e..f5555fee.f55555f.e.
        e....ef777.ee.777fff....
        ......77777ee77777...e..
        .e.e..777777777777.e..e.
        .......7777777777.......
        `],
    500,
    true
    )
    向日葵的血量.attachToSprite(向日葵, 3, 0)
    向日葵.setPosition(randint(70, 380), 92)
    含羞草 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f . . . . . . . . . 
        . . f 7 7 7 7 f . . . . . . . . 
        . . . f 7 7 f . . . f . . . . . 
        . . . f 7 7 7 f . f 7 f . . . . 
        . . f 7 7 f 7 7 f 7 7 f . . . . 
        . . f 7 f . f 7 7 7 f . . . . . 
        . . . f . . f 7 7 f . . . . . . 
        . . . . . f 7 7 7 f . f f f . . 
        . . . . f 7 7 f 7 7 f f 7 7 f . 
        . . . . . f f . f 7 f 7 7 f . . 
        . . . . . . . . f 7 7 7 f . . . 
        . . . . . . . f 7 7 7 f . . . . 
        . . . . . . f 7 7 f 7 7 f . . . 
        . . . . . . . f f . f 7 f . . . 
        . . . . . . . . . . f 7 f . . . 
        `, SpriteKind.含羞草)
    animation.runImageAnimation(
    含羞草,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f . . . . . . . . . 
        . . f 7 7 7 7 f . . . . . . . . 
        . . . f 7 7 f . . . f . . . . . 
        . . . f 7 7 7 f . f 7 f . . . . 
        . . f 7 7 f 7 7 f 7 7 f . . . . 
        . . f 7 f . f 7 7 7 f . . . . . 
        . . . f . . f 7 7 f . . . . . . 
        . . . . . f 7 7 7 f . f f f . . 
        . . . . f 7 7 f 7 7 f f 7 7 f . 
        . . . . . f f . f 7 f 7 7 f . . 
        . . . . . . . . f 7 7 7 f . . . 
        . . . . . . . f 7 7 7 f . . . . 
        . . . . . . f 7 7 f 7 7 f . . . 
        . . . . . . . f f . f 7 f . . . 
        . . . . . . . . . . f 7 f . . . 
        `],
    500,
    true
    )
    含羞草的血量.attachToSprite(含羞草, 3, 0)
    含羞草.setPosition(randint(70, 380), 92)
    金幣 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . f 5 5 f . . . . . f 5 5 f . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.金幣4)
    金幣.setPosition(randint(70, 380), 92)
    元寶 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . f f f . f 5 5 f . f f f . 
        . . . f 5 5 f 5 5 5 5 f 5 5 f . 
        . . . f 5 5 5 f f f f 5 5 5 f . 
        . . . f f 5 5 5 5 5 5 5 5 f f . 
        . . . . f 5 5 5 5 5 5 5 5 f . . 
        . . . . f f 5 5 5 5 5 5 f f . . 
        . . . . . f f 5 5 5 5 f f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.元寶4)
    元寶.setPosition(randint(70, 380), 92)
    寶箱 = sprites.create(img`
        . . f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e e f . 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 5 e e e e e e e e e e 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f f f f f f f d d f f f f f f f 
        c f f f f f f c c f f f f f f c 
        c c c c c c f c c f c c c c c c 
        f 5 5 5 5 5 c f f c 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f c 5 5 5 5 5 5 5 5 5 5 5 5 c f 
        f f f f f f f f f f f f f f f f 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.寶箱)
    寶箱.setPosition(randint(280, 380), 92)
    生命 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . f f . . . . 
        . . . . f 2 2 f . f 2 2 f . . . 
        . . . f 2 2 2 2 f 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . . f 2 2 2 2 2 2 2 f . . . 
        . . . . . f 2 2 2 2 2 f . . . . 
        . . . . . . f 2 2 2 f . . . . . 
        . . . . . . . f 2 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.生命4)
    生命.setPosition(randint(70, 380), 92)
    旗子.setKind(SpriteKind.旗子4)
    槍手.setKind(SpriteKind.槍手4)
})
sprites.onOverlap(SpriteKind.槍手2, SpriteKind.金幣2, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.play劍士, SpriteKind.魟魚, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    魟魚的血量.value += -100
})
sprites.onOverlap(SpriteKind.魔法師6, SpriteKind.寶箱3, function (sprite, otherSprite) {
    music.jumpUp.play()
    otherSprite.destroy()
    info.changeScoreBy(3)
})
sprites.onOverlap(SpriteKind.劍士5, SpriteKind.旗子5, function (sprite, otherSprite) {
    旗子.setFlag(SpriteFlag.Invisible, true)
    tiles.setTilemap(tilemap`層級36`)
    貝殼 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . f f b b d b d d b b f f . . 
        . f d d b d d b d d d b d d f . 
        f 1 1 b d d b d d b d d b 1 1 f 
        f f f f 1 1 f 1 1 f 1 1 f f f f 
        f b d f f f b f f b f f f d b f 
        . f b b d d b d d b d d b b f . 
        . . f f f f f f f f f f f f . . 
        `, SpriteKind.貝殼)
    animation.runImageAnimation(
    貝殼,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . f f b b d b d d b b f f . . 
        . f d d b d d b d d d b d d f . 
        f 1 1 b d d b d d b d d b 1 1 f 
        f f f f 1 1 f 1 1 f 1 1 f f f f 
        f b d f f f b f f b f f f d b f 
        . f b b d d b d d b d d b b f . 
        . . f f f f f f f f f f f f . . 
        `,img`
        . . . . . f c c c c f . . . . . 
        . . c c f b b d d b b f c c . . 
        . c b d d b b c c b b d d b c . 
        . f d c c c b c c b c c c d f . 
        f c b b c c b c c b c c b b c f 
        c d c c b c c c c c c b c c d c 
        c d c c c c c c c c c c c c d c 
        . f b b c c c c c c c c b b f . 
        . . f b b f f f f f f b b f . . 
        . . c c f 1 1 1 1 1 1 f c c . . 
        . c d f 1 1 1 1 1 1 1 1 f d c . 
        c d 1 1 f 1 1 1 1 1 1 f 1 1 d c 
        f d c c 1 f f 1 1 f f 1 c c d f 
        f b d c b b 1 f f 1 b b c d b f 
        . c b b d d b d d b d d b b c . 
        . . f f f f f f f f f f f f . . 
        `,img`
        . . . . . f c c c c f . . . . . 
        . . c c f b b d d b b f c c . . 
        . c b d d b b c c b b d d b c . 
        . f d c c c b c c b c c c d f . 
        f c b b c c b c c b c c b b c f 
        c d c c b c c c c c c b c c d c 
        c d c c c c c c c c c c c c d c 
        . f b b c c c c c c c c b b f . 
        . . f b b f f f f f f b b f . . 
        . . c c f 1 1 1 1 1 1 f c c . . 
        . c d f 1 1 1 1 1 1 1 1 f d c . 
        c d 1 1 f 1 1 1 1 1 1 f 1 1 d c 
        f d c c 1 f f 1 1 f f 1 c c d f 
        f b d c b b 1 f f 1 b b c d b f 
        . c b b d d b d d b d d b b c . 
        . . f f f f f f f f f f f f . . 
        `],
    500,
    true
    )
    貝殼.setPosition(630, 90)
    劍士.setStayInScreen(true)
    鯊魚的血量 = statusbars.create(20, 4, StatusBarKind.鯊魚)
    鯊魚的血量.setColor(8, 2)
    魟魚的血量 = statusbars.create(20, 4, StatusBarKind.魟魚)
    魟魚的血量.setColor(8, 2)
    水母的血量 = statusbars.create(20, 4, StatusBarKind.水母)
    水母的血量.setColor(8, 2)
    龍的血量 = statusbars.create(40, 6, StatusBarKind.龍)
    龍的血量.setColor(8, 2)
    info.startCountdown(30)
    旗子.setPosition(630, 90)
    sprite.setPosition(0, 92)
    鯊魚 = sprites.create(img`
        ....................ffffff..............
        .................fffcccccf..............
        ................fccccccff...............
        ..........ffffffccccccf.................
        .......fffcccccccccccf..................
        .....ffcccccfccccccccff.................
        ....fccffccccfccfccccccff...............
        ...fccf2cccfccfccfcccccccff.............
        ..fcccccccffccfcccfccccccccff...........
        .fcccccccf1fccccccfccccccccccff.........
        fcccccfff3fccccccccccccccccccccf........
        .fffff133f1cccf1ccccccccccccccccf.ffffff
        ....fffff11ccccf11ffffffff1111cccfcccccf
        .....f11111fcccfff........ffff1ccccccff.
        ......ffffffcccf..............fccccff...
        ............fcccf.............fcccf.....
        .............ffcf.............fccf......
        ...............ff..............fcf......
        ...............................fcf......
        ................................ff......
        `, SpriteKind.鯊魚)
    animation.runImageAnimation(
    鯊魚,
    [img`
        ....................ffffff..............
        .................fffcccccf..............
        ................fccccccff...............
        ..........ffffffccccccf.................
        .......fffcccccccccccf..................
        .....ffcccccfccccccccff.................
        ....fccffccccfccfccccccff...............
        ...fccf2cccfccfccfcccccccff.............
        ..fcccccccffccfcccfccccccccff...........
        .fcccccccf1fccccccfccccccccccff.........
        fcccccfff3fccccccccccccccccccccf........
        .fffff133f1cccf1ccccccccccccccccf.ffffff
        ....fffff11ccccf11ffffffff1111cccfcccccf
        .....f11111fcccfff........ffff1ccccccff.
        ......ffffffcccf..............fccccff...
        ............fcccf.............fcccf.....
        .............ffcf.............fccf......
        ...............ff..............fcf......
        ...............................fcf......
        ................................ff......
        `,img`
        ....................ffffff..............
        .................fffcccccf..............
        ................fccccccff...............
        ....ffffffffffffccccccf.................
        ..ffcccccccccccccccccf..................
        .ffcccccffccfccccccccff.................
        .1ffcccf2ccccfccfccccccff...............
        ..1ffccccccfccfccfcccccccff.............
        ..1.1fffcccfccfcccfccccccccf............
        ......ccfccfccccccfcccccccccff..........
        ...1.1.ffcccccccccccccccccccccf.fffffff.
        ..11ffffccccccf1cccccccccccccccfccccccf.
        ..fff111111ccccf11ffffffff111cccccccff..
        ..f111ffffffcccfff........fff1ccccff....
        ...ffff....fcccf.............fcccf......
        ............fcccf............fccf.......
        .............ffcf............fccf.......
        ...............ff.............fcf.......
        ..............................fcf.......
        ...............................ff.......
        `,img`
        ....................ffffff..............
        .................fffcccccf..............
        ................fccccccff...............
        ..........ffffffccccccf.................
        .........fcccccccccccf..................
        ......ffffccfccccccccff.................
        .....fcccccccfccfccccccff...............
        ....fccffccfccfccfcccccccff.............
        ...fccf2ccffccfcccfccccccccff...........
        ..fcccccccffccccccfccccccccccff.........
        ffcccccccffccccccccccccccccccccf........
        fcccccccff1cccf1ccccccccccccccccf.ffffff
        .ffffffff11ccccf11ffffffff1111cccfcccccf
        .....f11111fcccfff........ffff1ccccccff.
        ......ffffffcccf..............fccccff...
        ............fcccf.............fcccf.....
        .............ffcf.............fccf......
        ...............ff..............fcf......
        ...............................fcf......
        ................................ff......
        `],
    200,
    true
    )
    鯊魚.follow(劍士, 30)
    鯊魚的血量.attachToSprite(鯊魚, 3, 0)
    鯊魚.setPosition(randint(70, 380), randint(92, 30))
    魟魚 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . f b b b b f . . . . . . . 
        . . f b b b b b b f f . . . . . 
        . f b b b b b b b b b f . . . . 
        f b b 2 b b b b b b b b f f f f 
        . f b b b b b b b b b b b b b f 
        f b b 2 b b b b b b b b f f f f 
        . f b b b b b b b b b f . . . . 
        . . f b b b b b b f f . . . . . 
        . . . f b b b b f . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.魟魚)
    animation.runImageAnimation(
    魟魚,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . f b b b b f . . . . . . . 
        . . f b b b b b b f f . . . . . 
        . f b b b b b b b b b f . . . . 
        f b b 2 b b b b b b b b f f f f 
        . f b b b b b b b b b b b b b f 
        f b b 2 b b b b b b b b f f f f 
        . f b b b b b b b b b f . . . . 
        . . f b b b b b b f f . . . . . 
        . . . f b b b b f . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . f b b b b f . . . . . . . 
        . . f b b b b b b f f . . . f f 
        . f b b b b b b b b b f . f b f 
        f b b 2 b b b b b b b b f b f . 
        . f b b b b b b b b b b b b f . 
        f b b 2 b b b b b b b b f f . . 
        . f b b b b b b b b b f . . . . 
        . . f b b b b b b f f . . . . . 
        . . . f b b b b f . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . f b b b b f . . . . . . . 
        . . f b b b b b b f f . . . . . 
        . f b b b b b b b b b f . . . . 
        f b b 2 b b b b b b b b f f . . 
        . f b b b b b b b b b b b b f . 
        f b b 2 b b b b b b b b f b f . 
        . f b b b b b b b b b f . f b f 
        . . f b b b b b b f f . . . f f 
        . . . f b b b b f . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
    魟魚.follow(劍士, 30)
    魟魚的血量.attachToSprite(魟魚, 3, 0)
    魟魚.setPosition(randint(70, 380), randint(92, 30))
    水母 = sprites.create(img`
        . . . . . f f f f f . . . . . . 
        . . . . f 3 3 3 3 3 f . . . . . 
        . . . f 3 3 3 3 3 3 3 f . . . . 
        . . f f 3 3 3 3 3 3 3 f f . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f f f f f f f f f f f . . . 
        . . . f . f f . f . . f . . . . 
        . . f f . f . . f . . f f . . . 
        . . f . . f . . f f . . f . . . 
        . . f . . f . . . f . . f . . . 
        . . f . . f . . . f . . f . . . 
        . . f f . f f . . f . . f f . . 
        . . . f . . f . . . . . . f . . 
        . . . . . . f . . . . . . . . . 
        `, SpriteKind.水母)
    animation.runImageAnimation(
    水母,
    [img`
        . . . . . f f f f f . . . . . . 
        . . . . f 3 3 3 3 3 f . . . . . 
        . . . f 3 3 3 3 3 3 3 f . . . . 
        . . f f 3 3 3 3 3 3 3 f f . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f f f f f f f f f f f . . . 
        . . . f . f f . f . . f . . . . 
        . . f f . f . . f . . f f . . . 
        . . f . . f . . f f . . f . . . 
        . . f . . f . . . f . . f . . . 
        . . f . . f . . . f . . f . . . 
        . . f f . f f . . f . . f f . . 
        . . . f . . f . . . . . . f . . 
        . . . . . . f . . . . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 3 3 3 3 3 f . . . . . 
        . . . f 3 3 3 3 3 3 3 f . . . . 
        . . f f 3 3 3 3 3 3 3 f f . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f f f f f f f f f f f . . . 
        . . . f . . f . . f . . f . . . 
        . . . f f . f . . f . f f . . . 
        . . . . f . f . f f . f . . . . 
        . . . . f . f . f . . f . . . . 
        . . . . f . f . f . . f . . . . 
        . . . f f f f . f f . f f f . . 
        . . . f . f . . . . . . . f . . 
        . . . . . f . . . . . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 3 3 3 3 3 f . . . . . 
        . . . f 3 3 3 3 3 3 3 f . . . . 
        . . f f 3 3 3 3 3 3 3 f f . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f f f f f f f f f f f . . . 
        . . . f . . f . . f . . f . . . 
        . . . f f . f . . f . f f . . . 
        . . . . f . f . f f . f . . . . 
        . . . . f . f . f . . f . . . . 
        . . . . f . f . f . . f . . . . 
        . . . f f f f . f f . f f f . . 
        . . . f . f . . . . . . . f . . 
        . . . . . f . . . . . . . . . . 
        `],
    200,
    true
    )
    水母.follow(劍士, 30)
    水母的血量.attachToSprite(水母, 3, 0)
    水母.setPosition(randint(70, 380), randint(92, 30))
    龍 = sprites.create(img`
        ...............ffffff...
        ..............f88888f...
        .......f..f..f88888f8f..
        ......f..f..f888fff.ff..
        .....f..f...f88ff8f.....
        .....fffff..f8ff888f....
        .....f8888f.ff88888f....
        ....ff28288ff888888ff...
        ....f8888888fffff888ff..
        ....fffff8888f...ff88f..
        ........fd8888f....fff..
        ......ffffd8888f........
        .....f888fd88888fff...ff
        ....f8f8fffd8888888fff8f
        ....f1f1f..fdd888888888f
        .....f.f..f8888f888888ff
        ..........f8888f888f88f.
        ..........f88ff.f888ff..
        ...........f8f..f88f....
        ...........f8f...f8f....
        ..........f18f..f18f....
        ..........ffff..ffff....
        ........................
        ........................
        `, SpriteKind.龍)
    animation.runImageAnimation(
    龍,
    [img`
        ...............ffffff...
        ..............f88888f...
        .......f..f..f88888f8f..
        ......f..f..f888fff.ff..
        .....f..f...f88ff8f.....
        .....fffff..f8ff888f....
        .....f8888f.ff88888f....
        ....ff28288ff888888ff...
        ....f8888888fffff888ff..
        ....fffff8888f...ff88f..
        ........fd8888f....fff..
        ......ffffd8888f........
        .....f888fd88888fff...ff
        ....f8f8fffd8888888fff8f
        ....f1f1f..fdd888888888f
        .....f.f..f8888f888888ff
        ..........f8888f888f88f.
        ..........f88ff.f888ff..
        ...........f8f..f88f....
        ...........f8f...f8f....
        ..........f18f..f18f....
        ..........ffff..ffff....
        ........................
        ........................
        `,img`
        ...............ffffff...
        ..............f88888f...
        .......f..f..f88888f8f..
        ......f..f..f888fff.ff..
        .....f..f...f88ff8f.....
        .....fffff..f8ff888f....
        .....f8888f.ff88888f....
        .99.ff28288ff888888ff...
        9999f8888888fffff888ff..
        9999fffff8888f...ff88f..
        99999191fd8888f....fff..
        9999ffffffd8888f........
        9999.f888fd88888fff...ff
        .99.f8f8fffd8888888fff8f
        ....f1f1f..fdd888888888f
        .....f.f..f8888f888888ff
        ..........f8888f888f88f.
        ..........f88ff.f888ff..
        ...........f8f..f88f....
        ...........f8f...f8f....
        ..........f18f..f18f....
        ..........ffff..ffff....
        ........................
        ........................
        `],
    500,
    true
    )
    龍.follow(劍士, 50)
    龍的血量.attachToSprite(龍, 3, 0)
    龍.setPosition(380, 92)
    金幣 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . f 5 5 f . . . . . f 5 5 f . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.金幣6)
    金幣.setPosition(randint(70, 380), 92)
    元寶 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . f f f . f 5 5 f . f f f . 
        . . . f 5 5 f 5 5 5 5 f 5 5 f . 
        . . . f 5 5 5 f f f f 5 5 5 f . 
        . . . f f 5 5 5 5 5 5 5 5 f f . 
        . . . . f 5 5 5 5 5 5 5 5 f . . 
        . . . . f f 5 5 5 5 5 5 f f . . 
        . . . . . f f 5 5 5 5 f f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.元寶6)
    元寶.setPosition(randint(70, 380), 92)
    寶箱 = sprites.create(img`
        . . f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e e f . 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 5 e e e e e e e e e e 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f f f f f f f d d f f f f f f f 
        c f f f f f f c c f f f f f f c 
        c c c c c c f c c f c c c c c c 
        f 5 5 5 5 5 c f f c 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f c 5 5 5 5 5 5 5 5 5 5 5 5 c f 
        f f f f f f f f f f f f f f f f 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.寶箱3)
    寶箱.setPosition(randint(280, 380), 92)
    劍士.setKind(SpriteKind.劍士6)
})
sprites.onOverlap(SpriteKind.能量4, SpriteKind.蜘蛛, function (sprite, otherSprite) {
    sprite.destroy()
    蜘蛛的血量.value += -20
})
sprites.onOverlap(SpriteKind.射手1, SpriteKind.生命, function (sprite, otherSprite) {
    music.powerUp.play()
    otherSprite.destroy()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.player劍士, SpriteKind.旗子, function (sprite, otherSprite) {
    tiles.setTilemap(tilemap`層級14`)
    劍士.setStayInScreen(true)
    殭屍的血量 = statusbars.create(20, 4, StatusBarKind.殭屍)
    殭屍的血量.setColor(8, 2)
    鬼怪的血量 = statusbars.create(20, 4, StatusBarKind.鬼怪)
    鬼怪的血量.setColor(8, 2)
    蝙蝠的血量 = statusbars.create(20, 4, StatusBarKind.蝙蝠)
    蝙蝠的血量.setColor(8, 2)
    info.startCountdown(30)
    旗子.setPosition(630, 90)
    sprite.setPosition(0, 92)
    殭屍 = sprites.create(img`
        . . . f f f f f f f f . . . . . 
        . . f f f f f f f f 7 f . . . . 
        . f f 7 7 f 7 7 f 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . f 7 2 1 7 7 7 2 1 7 7 7 f . . 
        . f 7 1 1 f 7 f 1 1 7 7 7 f . . 
        . . f 7 7 7 7 7 7 7 7 7 f . . . 
        . . . f 2 1 2 1 2 2 7 f . . . . 
        . . . f 1 2 2 2 1 7 f f . . . . 
        . f f f f f f f f f f . . . . . 
        f 7 7 7 f c f 7 7 7 7 f . . . . 
        f 7 7 f f c f 7 7 7 7 f . . . . 
        f f f . f f f f f f f . . . . . 
        . . . f f c f f c c f . . . . . 
        . . . f 7 7 7 f 7 7 7 f . . . . 
        . . . f f f f f f f f f . . . . 
        `, SpriteKind.殭屍)
    animation.runImageAnimation(
    殭屍,
    [img`
        . . . f f f f f f f f . . . . . 
        . . f f f f f f f f 7 f . . . . 
        . f f 7 7 f 7 7 f 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . f 7 2 1 7 7 7 2 1 7 7 7 f . . 
        . f 7 1 1 f 7 f 1 1 7 7 7 f . . 
        . . f 7 7 7 7 7 7 7 7 7 f . . . 
        . . . f 2 1 2 1 2 2 7 f . . . . 
        . . . f 1 2 2 2 1 7 f f . . . . 
        . f f f f f f f f f f . . . . . 
        f 7 7 7 f c f 7 7 7 7 f . . . . 
        f 7 7 f f c f 7 7 7 7 f . . . . 
        f f f . f f f f f f f . . . . . 
        . . . f f c f f c c f . . . . . 
        . . . f 7 7 7 f 7 7 7 f . . . . 
        . . . f f f f f f f f f . . . . 
        `,img`
        . . . f f f f f f f f . . . . . 
        . . f f f f f f f f 7 f . . . . 
        . f f 7 7 f 7 7 f 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . f 7 2 1 7 7 7 2 1 7 7 7 f . . 
        . f 7 1 1 f 7 f 1 1 7 7 7 f . . 
        . . f 7 2 1 2 1 2 2 7 7 f . . . 
        . . . f 2 2 2 2 2 2 7 f . . . . 
        . . . f 1 2 2 2 1 2 f f . . . . 
        . f f f f f f f f f f . . . . . 
        f 7 7 7 f c f 7 7 7 7 f . . . . 
        f 7 7 f f c f 7 7 7 7 f . . . . 
        f f f . f f f f f f f . . . . . 
        . . . f f c f f c c f . . . . . 
        . . . f 7 7 7 f 7 7 7 f . . . . 
        . . . f f f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f . . . . . 
        . . f f f f f f f f 7 f . . . . 
        . f f 7 7 f 7 7 f 7 7 f f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . f 7 2 1 7 7 7 2 1 7 7 f . . . 
        . . f 1 1 f 7 f 1 1 7 f . . . . 
        . . . f 7 7 7 7 7 7 f f . . . . 
        . f f f f f f f f f f . . . . . 
        f 7 7 7 f c f 7 7 7 7 f . . . . 
        f 7 7 f f c f 7 7 7 7 f . . . . 
        f f f . f f f f f f f . . . . . 
        . . . f f c f f c c f . . . . . 
        . . . f 7 7 7 f 7 7 7 f . . . . 
        . . . f f f f f f f f f . . . . 
        `],
    500,
    true
    )
    殭屍.follow(劍士, 30)
    殭屍的血量.attachToSprite(殭屍, 3, 0)
    殭屍.setPosition(randint(70, 380), 92)
    鬼怪 = sprites.create(img`
        ........................
        ........................
        ........................
        .........fffff..........
        .......ff11111ff........
        ......f111111111f.......
        .....f11111111111f......
        .....f11111111111f......
        ....f1122112211111f.....
        ....f1222112221111f.....
        ....f1222112221111f.....
        ....f1221111221111f.....
        ....f1111111111111f.....
        ....f1111ff111ff11f.....
        ...f1f111ff11f1111f.....
        ...f1ff111111f1f111f....
        ....f..ff1111ff11111f...
        .........fff1111111f....
        ............fffffff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.鬼怪)
    animation.runImageAnimation(
    鬼怪,
    [img`
        ........................
        ........................
        ........................
        .........fffff..........
        .......ff11111ff........
        ......f111111111f.......
        .....f11111111111f......
        .....f11111111111f......
        ....f1122112211111f.....
        ....f1222112221111f.....
        ....f1222112221111f.....
        ....f1221111221111f.....
        ....f1111111111111f.....
        ....f1111ff111ff11f.....
        ...f1f111ff11f1111f.....
        ...f1ff111111f1f111f....
        ....f..ff1111ff11111f...
        .........fff1111111f....
        ............fffffff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        .........fffff..........
        .......ff11111ff........
        ......f111111111f.......
        .fff.f1111111fff1f......
        .f1fff1111111f11ff......
        .f11f112211221f111f.....
        ..f1f1222112221f11f.....
        ...ff1222112221111f.....
        ....f1221111221111f.....
        ....f1111111111111f.....
        ....f1111ff1111111f.....
        .....f111ff1111111f.....
        .....ff111111111111f....
        .......ff11111111111f...
        .........fff1111111f....
        ............fffffff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    200,
    true
    )
    鬼怪.follow(劍士, 30)
    鬼怪的血量.attachToSprite(鬼怪, 3, 0)
    鬼怪.setPosition(randint(70, 380), randint(92, 30))
    蝙蝠 = sprites.create(img`
        . . . b . . . . . . b b . . . . 
        . . . a b . . . . b a a . . . . 
        . . . a a b . . b a a a . . . . 
        . . . b a b b b b a a . . . . . 
        . . . . b b b b b b b . . . . . 
        . . . . b 2 b 2 b b b f b . . . 
        . . . . b 2 b 2 b b b f b b . . 
        . . . . b b b b b b f f f b b . 
        . . . b b . . . . . . . . b b b 
        . . . b b b . . . . . . . b b b 
        . . b b b b . . . . . . b b b b 
        . . b b b b b . . . . . b b b b 
        . . b b b b b . . . . . . b b b 
        . . . b b b . . . . . . . . b b 
        . . . . b . . . . . . . . . . b 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.蝙蝠)
    animation.runImageAnimation(
    蝙蝠,
    [img`
        ...b......bb............
        ...ab....baa............
        ...aab..baaa............
        ...babbbbaa.............
        ....bbbbbbb.............
        ....b2b2bbbfbf..........
        ....b2b2bbbfbb..........
        ....bbbbbbfffbb.........
        ...bb........bbb........
        ...bbb.......bbb........
        ..bbbb......bbbb........
        ..bbbbb.....bbbbb.......
        ..bbbbb.....bbbbb.......
        ...bbb.......bbb........
        ....b.........b.........
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        bbbb....................
        .dddbb..........bbbb....
        .bbdddb.......bbddd.....
        ...bbbbb.....bdddbb.....
        ...bddb..bb.bbbbbd......
        ...abbb.baa..bddd.......
        ...aabbbaaa..bbbd.......
        ...babbbaa...bddbb......
        ....bbbbbb..bdbdd.......
        ....b2b2bbfbdddb........
        ....b2b2bbfbff..........
        .....bbbbfff............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    200,
    true
    )
    蝙蝠.follow(劍士, 30)
    蝙蝠的血量.attachToSprite(蝙蝠, 3, 0)
    蝙蝠.setPosition(randint(70, 380), randint(92, 30))
    金幣 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . f 5 5 f . . . . . f 5 5 f . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.金幣)
    金幣.setPosition(randint(70, 380), 92)
    元寶 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . f f f . f 5 5 f . f f f . 
        . . . f 5 5 f 5 5 5 5 f 5 5 f . 
        . . . f 5 5 5 f f f f 5 5 5 f . 
        . . . f f 5 5 5 5 5 5 5 5 f f . 
        . . . . f 5 5 5 5 5 5 5 5 f . . 
        . . . . f f 5 5 5 5 5 5 f f . . 
        . . . . . f f 5 5 5 5 f f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.元寶)
    元寶.setPosition(randint(70, 380), 92)
    生命 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . f f . . . . 
        . . . . f 2 2 f . f 2 2 f . . . 
        . . . f 2 2 2 2 f 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . . f 2 2 2 2 2 2 2 f . . . 
        . . . . . f 2 2 2 2 2 f . . . . 
        . . . . . . f 2 2 2 f . . . . . 
        . . . . . . . f 2 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.生命)
    生命.setPosition(randint(70, 380), 92)
    旗子.setKind(SpriteKind.旗子1)
    劍士.setKind(SpriteKind.劍士1)
})
sprites.onOverlap(SpriteKind.play魔法師, SpriteKind.蟒蛇, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    蟒蛇的血量.value += -30
})
sprites.onOverlap(SpriteKind.play劍士, SpriteKind.向日葵, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    向日葵的血量.value += -100
})
sprites.onOverlap(SpriteKind.play劍士, SpriteKind.蟒蛇, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    蟒蛇的血量.value += -100
})
sprites.onOverlap(SpriteKind.play劍士, SpriteKind.鯊魚, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    鯊魚的血量.value += -100
})
sprites.onOverlap(SpriteKind.槍手1, SpriteKind.殭屍, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.能量3, SpriteKind.螳螂, function (sprite, otherSprite) {
    sprite.destroy()
    螳螂的血量.value += -20
})
controller.combos.attachCombo("BD", function () {
    music.pewPew.play()
    animation.runImageAnimation(
    槍手,
    [img`
        ........................
        .......fff..............
        ......feeef.............
        ....ffeeeefff...........
        ...fefeeeefeff..........
        ..feeffeeffeeef.........
        ..feeeffffeeeef.........
        ..ffeeeeeeeeef..........
        ...fffffffffff..........
        ....555555ddd...........
        ....55d551fdd......f....
        .....5d5d1fdd...fffff...
        .....5ddddddd..fffe.....
        .....ffffffffffddf......
        ....feeeeeeeeefdf.......
        ...feeeeeeeeefff........
        ..feeeeeeeeeff..........
        .fddffeeeeeef...........
        .fff.feeeeeef...........
        .fe...ffffff............
        ff....eeeeee............
        .f....ee..ee............
        ......ff..ff............
        ......fff.fff...........
        `,img`
        ........................
        .......fff..............
        ......feeef.............
        ....ffeeeefff...........
        ...fefeeeefeff..........
        ..feeffeeffeeef.........
        ..feeeffffeeeef.........
        ..ffeeeeeeeeef..........
        ...fffffffffff..........
        ....555555ddd...........
        ....55d551fdd......f....
        .....5d5d1fdd...fffff...
        .....5ddddddd..fffe.....
        .....ffffffffffddf......
        ....feeeeeeeeefdf.......
        ...feeeeeeeeefff........
        ..feeeeeeeeeff..........
        .fddffeeeeeef...........
        .fff.feeeeeef...........
        .fe...ffffff............
        ff....eeeeee............
        .f....eeeeee............
        ........ff..............
        ........ff..............
        `,img`
        ........................
        .......fff..............
        ......feeef.............
        ....ffeeeefff...........
        ...fefeeeefeff..........
        ..feeffeeffeeef.........
        ..feeeffffeeeef.........
        ..ffeeeeeeeeef..........
        ...fffffffffff..........
        ....555555ddd...........
        ....55d551fdd......f....
        .....5d5d1fdd...fffff...
        .....5ddddddd..fffe.....
        .....ffffffffffddf......
        ....feeeeeeeeefdf.......
        ...feeeeeeeeefff........
        ..feeeeeeeeeff..........
        .fddffeeeeeef...........
        .fff.feeeeeef...........
        .fe...ffffff............
        ff....eeeeee............
        .f....ee..ee............
        ......ff..ff............
        ......fff.fff...........
        `],
    100,
    false
    )
    能量4 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 槍手, 50, 0)
    能量4.setKind(SpriteKind.能量4)
    能量4.setFlag(SpriteFlag.AutoDestroy, true)
    pause(100)
})
sprites.onOverlap(SpriteKind.魔法師5, SpriteKind.水母, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.槍手6, SpriteKind.貝殼, function (sprite, otherSprite) {
    槍手.setKind(SpriteKind.槍手7)
    game.over(true)
})
statusbars.onZero(StatusBarKind.蝙蝠, function (status) {
    蝙蝠.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.能量2, SpriteKind.水母, function (sprite, otherSprite) {
    sprite.destroy()
    水母的血量.value += -20
})
sprites.onOverlap(SpriteKind.槍手1, SpriteKind.元寶, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.魔法師1, SpriteKind.元寶, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.player箭頭, SpriteKind.player射手, function (sprite, otherSprite) {
    箭頭.destroy()
    劍士.destroy()
    射手.destroy()
    魔法師.destroy()
    槍手.destroy()
    射手 = sprites.create(img`
        ........................
        ......fffff.............
        .....feeeeef..ff........
        ....feeeeeeef.f.f.......
        ....feeeeeeef.f..f......
        ....feeeedddf.f...f.....
        ....feeee1fdf.f...f.f...
        ..1.feeed1fdf.1fffffff..
        .1.1feffddddfdf...f.f...
        ..1feef86fffdff..f......
        ..ffffff886ff.f.f.......
        ...ffffdf86f..ff........
        ...ffffdf6ff............
        .....fdf868f............
        ......ff88f.............
        .......f668f............
        .......f868f............
        .......f88ff............
        .......fff..............
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.player射手)
    射手.setPosition(60, 90)
    scene.cameraFollowSprite(射手)
    射手.say("我叫Archer", 1000)
    pause(1000)
    射手.say("攻擊怪物時")
    pause(1000)
    射手.say("請按\"A下\"")
    pause(1500)
    射手.say("我的大招可以使怪物中毒", 3000)
    pause(3000)
    射手.say("使用大招時", 1000)
    pause(1000)
    射手.say("請按\"AABB\"", 2000)
    pause(2000)
    controller.moveSprite(射手, 100, 0)
})
sprites.onOverlap(SpriteKind.能量2, SpriteKind.蝙蝠, function (sprite, otherSprite) {
    sprite.destroy()
    蝙蝠的血量.value += -20
})
sprites.onOverlap(SpriteKind.魔法師5, SpriteKind.生命5, function (sprite, otherSprite) {
    music.powerUp.play()
    otherSprite.destroy()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.魔法師1, SpriteKind.蝙蝠, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.能量3, SpriteKind.殭屍, function (sprite, otherSprite) {
    sprite.destroy()
    殭屍的血量.value += -20
})
sprites.onOverlap(SpriteKind.play魔法師, SpriteKind.老虎, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    老虎的血量.value += -30
})
sprites.onOverlap(SpriteKind.射手5, SpriteKind.寶箱2, function (sprite, otherSprite) {
    music.jumpUp.play()
    otherSprite.destroy()
    info.changeScoreBy(3)
})
sprites.onOverlap(SpriteKind.劍士2, SpriteKind.旗子2, function (sprite, otherSprite) {
    tiles.setTilemap(tilemap`層級22`)
    劍士.setStayInScreen(true)
    蜘蛛的血量 = statusbars.create(20, 4, StatusBarKind.蜘蛛)
    蜘蛛的血量.setColor(8, 2)
    螳螂的血量 = statusbars.create(20, 4, StatusBarKind.螳螂)
    螳螂的血量.setColor(8, 2)
    蜜蜂的血量 = statusbars.create(20, 4, StatusBarKind.蜜蜂)
    蜜蜂的血量.setColor(8, 2)
    info.startCountdown(30)
    旗子.setPosition(630, 90)
    sprite.setPosition(0, 92)
    蜘蛛 = sprites.create(img`
        . . f . . . . . . . f . . . . . 
        . . . f f . . . . f . . . f . . 
        . . . . . f . . f . . f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . f f f f f f . f f f . . . 
        . . f . . . f f f f f f f f . . 
        . . . . . f 2 f f f f f f f f . 
        . . . . . . f f f f f f f f f . 
        . . . . . f 2 f f f f f f f f . 
        . . f . . . f f f f f f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . f . . f . . f f . . . 
        . . . f f . . . . f . . . f . . 
        . . f . . . . . . . f . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.蜘蛛)
    animation.runImageAnimation(
    蜘蛛,
    [img`
        . . f . . . . . . . f . . . . . 
        . . . f f . . . . f . . . f . . 
        . . . . . f . . f . . f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . f f f f f f . f f f . . . 
        . . f . . . f f f f f f f f . . 
        . . . . . f 2 f f f f f f f f . 
        . . . . . . f f f f f f f f f . 
        . . . . . f 2 f f f f f f f f . 
        . . f . . . f f f f f f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . f . . f . . f f . . . 
        . . . f f . . . . f . . . f . . 
        . . f . . . . . . . f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . f . . . . . . . f . . . . . 
        . . . f f . . . . f . . . f . . 
        . . . . . f . . f . . f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . f f f f f f . f f f . . . 
        . . f . . . f f f f f f f f . . 
        . . . . . f 2 f f f f f f f f . 
        . . . . . . f f f f f f f f f . 
        . . . . . f 2 f f f f f f f f . 
        . . f . . . f f f f f f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . . f . f . . f f . . . 
        . . . . . . . f . f . . . f . . 
        . . . . . . . f . . f . . . . . 
        . . . . . . . . f . . . . . . . 
        `,img`
        . . . . . . . . f . f . . . . . 
        . . . . . . . f . f . . . f . . 
        . . . . . . f . f . . f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . f f f f f f . f f f . . . 
        . . f . . . f f f f f f f f . . 
        . . . . . f 2 f f f f f f f f . 
        . . . . . . f f f f f f f f f . 
        . . . . . f 2 f f f f f f f f . 
        . . f . . . f f f f f f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . f . . f . . f f . . . 
        . . . f f . . . . f . . . f . . 
        . . f . . . . . . . f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . f . . . . . . . f . . . . . 
        . . . f f . . . . f . . . f . . 
        . . . . . f . . f . . f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . f f f f f f . f f f . . . 
        . . f . . . f f f f f f f f . . 
        . . . . . f 2 f f f f f f f f . 
        . . . . . . f f f f f f f f f . 
        . . . . . f 2 f f f f f f f f . 
        . . f . . . f f f f f f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . f . . f . . f f . . . 
        . . . f f . . f . . . . . f . . 
        . . f . . . f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . f . . . f . . . . . . . . . 
        . . . f f . . f . . . . . f . . 
        . . . . . f . . f . . f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . f f f f f f . f f f . . . 
        . . f . . . f f f f f f f f . . 
        . . . . . f 2 f f f f f f f f . 
        . . . . . . f f f f f f f f f . 
        . . . . . f 2 f f f f f f f f . 
        . . f . . . f f f f f f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . f . . f . . f f . . . 
        . . . f f . . . . f . . . f . . 
        . . f . . . . . . . f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . f . . . . . . . f . . . . . 
        . . . f f . . . . f . . . f . . 
        . . . . . f . . f . . f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . f f f f f f . f f f . . . 
        . . f . . . f f f f f f f f . . 
        . . . . . f 2 f f f f f f f f . 
        . . . . . . f f f f f f f f f . 
        . . . . . f 2 f f f f f f f f . 
        . . f . . . f f f f f f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . f . . f f . . . . . . 
        . . . f f . . f . f . . . . . . 
        . . f . . . . . . . f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . f . . . . . . . f . . . . . 
        . . . f f . . f . f . . . . . . 
        . . . . . f . . f f . . . . . . 
        . . . . . . f . f . f . . . . . 
        . . . f f f f f f . f f f . . . 
        . . f . . . f f f f f f f f . . 
        . . . . . f 2 f f f f f f f f . 
        . . . . . . f f f f f f f f f . 
        . . . . . f 2 f f f f f f f f . 
        . . f . . . f f f f f f f f . . 
        . . . f f f f f f . f f f . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . f . . f . . f f . . . 
        . . . f f . . . . f . . . f . . 
        . . f . . . . . . . f . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
    蜘蛛.follow(劍士, 30)
    蜘蛛的血量.attachToSprite(蜘蛛, 3, 0)
    蜘蛛.setPosition(randint(70, 380), randint(92, 30))
    螳螂 = sprites.create(img`
        ....ff.ff...............
        .....fff................
        ....27772......f........
        ....f777f..f..ff........
        ..ff.f7f7f.f..ff........
        .f77f.ff77fff.ff........
        .f7fff.ff77fffff........
        .f7f7fffff77777fff......
        .f7f77ff7ff7777777f.....
        ..ff7777ff7ff777777f....
        ..ff7fff.f7f.f7ffffff...
        ...f7f..f7f.ff7f........
        ....f..f7f..f7f.........
        ....f..f7f..f7f.........
        .......f7f..f7f.........
        ........f....f..........
        `, SpriteKind.螳螂)
    animation.runImageAnimation(
    螳螂,
    [img`
        ....ff.ff...............
        .....fff................
        ....27772......f........
        ....f777f..f..ff........
        ..ff.f7f7f.f..ff........
        .f77f.ff77fff.ff........
        .f7fff.ff77fffff........
        .f7f7fffff77777fff......
        .f7f77ff7ff7777777f.....
        ..ff7777ff7ff777777f....
        ..ff7fff.f7f.f7ffffff...
        ...f7f..f7f.ff7f........
        ....f..f7f..f7f.........
        ....f..f7f..f7f.........
        .......f7f..f7f.........
        ........f....f..........
        `,img`
        ....ff.ff...............
        .....fff................
        ....27772......f........
        ....f777f..f..ff........
        ..ff.f7f7f.f..ff........
        .f77f.ff77fff.ff........
        .f7f7f..f77fffff........
        .f7f7fffff77777fff......
        .ff7ff7f.ff7777777f.....
        ..fff7f....ff777777f....
        ...f77f......ffffffff...
        ..f7fff......f77f.f7ff..
        ..fff........ff77f.f77f.
        ...f..........ff77f.ff7f
        ...f............ffff..ff
        ........f........ffff...
        `],
    500,
    true
    )
    螳螂.follow(劍士, 30)
    螳螂的血量.attachToSprite(螳螂, 3, 0)
    螳螂.setPosition(randint(70, 380), 92)
    蜜蜂 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f . f f f . . . . 
        . f . . f f 1 f f f 1 1 f . . . 
        f 1 f . f 1 1 f 1 1 1 1 f . . . 
        . f f . f 1 1 f 1 1 1 f . . . . 
        . . f f f 1 1 f 1 1 1 f . . . . 
        . f 2 f 5 1 f 1 1 1 f f 5 . . . 
        . f 1 f 5 f 1 1 1 f 5 f 5 5 . . 
        . f f 5 5 f f f f 5 5 f 5 5 5 . 
        f . . . 5 f 5 5 f 5 5 f 5 5 . . 
        . . . . 5 f 5 5 f 5 5 f 5 . . . 
        . . . . . f 5 5 f 5 5 . f . . . 
        . . . . . . f 1 1 f . . . f . . 
        . . . . . . . f 1 1 f . . . . . 
        `, SpriteKind.蜜蜂)
    animation.runImageAnimation(
    蜜蜂,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f . f f f . . . . 
        . f . . f f 1 f f f 1 1 f . . . 
        f . f . f 1 1 f 1 1 1 1 f . . . 
        . f f . f 1 1 f 1 1 1 f . . . . 
        . . f f f 1 1 f 1 1 1 f . . . . 
        . f 2 f 5 1 f 1 1 1 f f 5 . . . 
        . f 1 f 5 f 1 1 1 f 5 f 5 5 . . 
        . f f 5 5 f f f f 5 5 f 5 5 5 f 
        f . . . 5 f 5 5 f 5 5 f 5 5 . . 
        . . . . 5 f 5 5 f 5 5 f 5 . . . 
        . . . . . f 5 5 f 5 5 . f . . . 
        . . . . . . f . . f . . . f . . 
        . . . . . . . f . . f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . f f f . . . . 
        . f . . . . . f f f 1 1 f . . . 
        f . f . . . . f 1 1 1 1 f . . . 
        . f f . . . . f 1 1 1 f . . . . 
        . . f f f . . f 1 1 1 f . . . . 
        . f 2 f 5 f f 1 1 1 f f 5 . . . 
        . f 1 f 5 f 1 1 1 f 5 f 5 5 . . 
        . f f 5 5 f f f f 5 5 f 5 5 5 . 
        f . . . 5 f 5 5 f 5 5 f 5 5 . . 
        . . . . 5 f 5 5 f 5 5 f 5 . . . 
        . . . . . f 5 5 f 5 5 . f . . . 
        . . . . . . f . . f . . . f . . 
        . . . . . . . f . . f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f . . . . . . . . 
        . f . . f f 1 f . . . . . . . . 
        f . f . f 1 1 f . . . . . . . . 
        . f f . f 1 1 f . . . . . . . . 
        . . f f f 1 1 f f f . . . . . . 
        . f 2 f 5 f f 1 1 1 f f 5 . . . 
        . f 1 f 5 f 1 1 1 1 f f 5 5 . . 
        . f f 5 5 f f 1 1 1 f f 5 5 5 . 
        f . . . 5 f 5 f 1 1 f f 5 5 . . 
        . . . . 5 f 5 f 1 1 1 f 5 . . . 
        . . . . . f 5 5 f f f . f . . . 
        . . . . . . f . . f . . . f . . 
        . . . . . . . f . . f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f . f f f . . . . . 
        . . . f 1 1 f f f 1 f f . . f . 
        . . . f 1 1 1 1 f 1 1 f . f . f 
        . . . . f 1 1 1 f 1 1 f . f f . 
        . . . . f 1 1 1 f 1 1 f f f . . 
        . . . 5 f f 1 1 1 f 1 5 f 2 f . 
        . . 5 5 f 5 f 1 1 1 f 5 f 1 f . 
        f 5 5 5 f 5 5 f f f f 5 5 f f . 
        . . 5 5 f 5 5 f 5 5 f 5 . . . f 
        . . . 5 f 5 5 f 5 5 f 5 . . . . 
        . . . f . 5 5 f 5 5 f . . . . . 
        . . f . . . f . . f . . . . . . 
        . . . . . f . . f . . . . . . . 
        `],
    200,
    true
    )
    蜜蜂.follow(劍士, 30)
    蜜蜂的血量.attachToSprite(蜜蜂, 3, 0)
    蜜蜂.setPosition(randint(70, 380), randint(92, 30))
    金幣 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . f 5 5 f . . . . . f 5 5 f . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.金幣3)
    金幣.setPosition(randint(70, 380), 92)
    元寶 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . f f f . f 5 5 f . f f f . 
        . . . f 5 5 f 5 5 5 5 f 5 5 f . 
        . . . f 5 5 5 f f f f 5 5 5 f . 
        . . . f f 5 5 5 5 5 5 5 5 f f . 
        . . . . f 5 5 5 5 5 5 5 5 f . . 
        . . . . f f 5 5 5 5 5 5 f f . . 
        . . . . . f f 5 5 5 5 f f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.元寶3)
    元寶.setPosition(randint(70, 380), 92)
    生命 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . f f . . . . 
        . . . . f 2 2 f . f 2 2 f . . . 
        . . . f 2 2 2 2 f 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . . f 2 2 2 2 2 2 2 f . . . 
        . . . . . f 2 2 2 2 2 f . . . . 
        . . . . . . f 2 2 2 f . . . . . 
        . . . . . . . f 2 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.生命3)
    生命.setPosition(randint(70, 380), 92)
    旗子.setKind(SpriteKind.旗子3)
    劍士.setKind(SpriteKind.劍士3)
})
statusbars.onZero(StatusBarKind.殭屍, function (status) {
    殭屍.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.play劍士, SpriteKind.龍, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    龍的血量.value += -25
})
sprites.onOverlap(SpriteKind.劍士2, SpriteKind.老虎, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.劍士6, SpriteKind.龍, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.槍手5, SpriteKind.生命5, function (sprite, otherSprite) {
    music.powerUp.play()
    otherSprite.destroy()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.能量4, SpriteKind.含羞草, function (sprite, otherSprite) {
    sprite.destroy()
    含羞草的血量.value += -20
})
sprites.onOverlap(SpriteKind.槍手4, SpriteKind.元寶4, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(2)
})
statusbars.onZero(StatusBarKind.蜘蛛, function (status) {
    蜘蛛.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.魔法師4, SpriteKind.食人花, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.能量1, SpriteKind.食人花, function (sprite, otherSprite) {
    sprite.destroy()
    食人花的血量.value += -20
})
sprites.onOverlap(SpriteKind.player槍手, SpriteKind.狼, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    狼的血量.value += -20
})
sprites.onOverlap(SpriteKind.魔法師1, SpriteKind.生命, function (sprite, otherSprite) {
    music.powerUp.play()
    otherSprite.destroy()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.射手4, SpriteKind.金幣4, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.劍士6, SpriteKind.貝殼, function (sprite, otherSprite) {
    劍士.setKind(SpriteKind.劍士7)
    game.over(true)
})
sprites.onOverlap(SpriteKind.劍士5, SpriteKind.元寶5, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.槍手6, SpriteKind.龍, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.play魔法師, SpriteKind.龍, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    龍的血量.value += -30
})
sprites.onOverlap(SpriteKind.能量2, SpriteKind.鬼怪, function (sprite, otherSprite) {
    sprite.destroy()
    鬼怪的血量.value += -20
})
sprites.onOverlap(SpriteKind.射手6, SpriteKind.元寶6, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.魔法師5, SpriteKind.元寶5, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.能量3, SpriteKind.老虎, function (sprite, otherSprite) {
    sprite.destroy()
    老虎的血量.value += -20
})
sprites.onOverlap(SpriteKind.槍手5, SpriteKind.旗子5, function (sprite, otherSprite) {
    旗子.setFlag(SpriteFlag.Invisible, true)
    tiles.setTilemap(tilemap`層級34`)
    貝殼 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . f f b b d b d d b b f f . . 
        . f d d b d d b d d d b d d f . 
        f 1 1 b d d b d d b d d b 1 1 f 
        f f f f 1 1 f 1 1 f 1 1 f f f f 
        f b d f f f b f f b f f f d b f 
        . f b b d d b d d b d d b b f . 
        . . f f f f f f f f f f f f . . 
        `, SpriteKind.貝殼)
    animation.runImageAnimation(
    貝殼,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . f f b b d b d d b b f f . . 
        . f d d b d d b d d d b d d f . 
        f 1 1 b d d b d d b d d b 1 1 f 
        f f f f 1 1 f 1 1 f 1 1 f f f f 
        f b d f f f b f f b f f f d b f 
        . f b b d d b d d b d d b b f . 
        . . f f f f f f f f f f f f . . 
        `,img`
        . . . . . f c c c c f . . . . . 
        . . c c f b b d d b b f c c . . 
        . c b d d b b c c b b d d b c . 
        . f d c c c b c c b c c c d f . 
        f c b b c c b c c b c c b b c f 
        c d c c b c c c c c c b c c d c 
        c d c c c c c c c c c c c c d c 
        . f b b c c c c c c c c b b f . 
        . . f b b f f f f f f b b f . . 
        . . c c f 1 1 1 1 1 1 f c c . . 
        . c d f 1 1 1 1 1 1 1 1 f d c . 
        c d 1 1 f 1 1 1 1 1 1 f 1 1 d c 
        f d c c 1 f f 1 1 f f 1 c c d f 
        f b d c b b 1 f f 1 b b c d b f 
        . c b b d d b d d b d d b b c . 
        . . f f f f f f f f f f f f . . 
        `,img`
        . . . . . f c c c c f . . . . . 
        . . c c f b b d d b b f c c . . 
        . c b d d b b c c b b d d b c . 
        . f d c c c b c c b c c c d f . 
        f c b b c c b c c b c c b b c f 
        c d c c b c c c c c c b c c d c 
        c d c c c c c c c c c c c c d c 
        . f b b c c c c c c c c b b f . 
        . . f b b f f f f f f b b f . . 
        . . c c f 1 1 1 1 1 1 f c c . . 
        . c d f 1 1 1 1 1 1 1 1 f d c . 
        c d 1 1 f 1 1 1 1 1 1 f 1 1 d c 
        f d c c 1 f f 1 1 f f 1 c c d f 
        f b d c b b 1 f f 1 b b c d b f 
        . c b b d d b d d b d d b b c . 
        . . f f f f f f f f f f f f . . 
        `],
    500,
    true
    )
    貝殼.setPosition(630, 90)
    槍手.setStayInScreen(true)
    鯊魚的血量 = statusbars.create(20, 4, StatusBarKind.鯊魚)
    鯊魚的血量.setColor(8, 2)
    魟魚的血量 = statusbars.create(20, 4, StatusBarKind.魟魚)
    魟魚的血量.setColor(8, 2)
    水母的血量 = statusbars.create(20, 4, StatusBarKind.水母)
    水母的血量.setColor(8, 2)
    龍的血量 = statusbars.create(40, 6, StatusBarKind.龍)
    龍的血量.setColor(8, 2)
    info.startCountdown(30)
    旗子.setPosition(630, 90)
    sprite.setPosition(0, 92)
    鯊魚 = sprites.create(img`
        ....................ffffff..............
        .................fffcccccf..............
        ................fccccccff...............
        ..........ffffffccccccf.................
        .......fffcccccccccccf..................
        .....ffcccccfccccccccff.................
        ....fccffccccfccfccccccff...............
        ...fccf2cccfccfccfcccccccff.............
        ..fcccccccffccfcccfccccccccff...........
        .fcccccccf1fccccccfccccccccccff.........
        fcccccfff3fccccccccccccccccccccf........
        .fffff133f1cccf1ccccccccccccccccf.ffffff
        ....fffff11ccccf11ffffffff1111cccfcccccf
        .....f11111fcccfff........ffff1ccccccff.
        ......ffffffcccf..............fccccff...
        ............fcccf.............fcccf.....
        .............ffcf.............fccf......
        ...............ff..............fcf......
        ...............................fcf......
        ................................ff......
        `, SpriteKind.鯊魚)
    animation.runImageAnimation(
    鯊魚,
    [img`
        ....................ffffff..............
        .................fffcccccf..............
        ................fccccccff...............
        ..........ffffffccccccf.................
        .......fffcccccccccccf..................
        .....ffcccccfccccccccff.................
        ....fccffccccfccfccccccff...............
        ...fccf2cccfccfccfcccccccff.............
        ..fcccccccffccfcccfccccccccff...........
        .fcccccccf1fccccccfccccccccccff.........
        fcccccfff3fccccccccccccccccccccf........
        .fffff133f1cccf1ccccccccccccccccf.ffffff
        ....fffff11ccccf11ffffffff1111cccfcccccf
        .....f11111fcccfff........ffff1ccccccff.
        ......ffffffcccf..............fccccff...
        ............fcccf.............fcccf.....
        .............ffcf.............fccf......
        ...............ff..............fcf......
        ...............................fcf......
        ................................ff......
        `,img`
        ....................ffffff..............
        .................fffcccccf..............
        ................fccccccff...............
        ....ffffffffffffccccccf.................
        ..ffcccccccccccccccccf..................
        .ffcccccffccfccccccccff.................
        .1ffcccf2ccccfccfccccccff...............
        ..1ffccccccfccfccfcccccccff.............
        ..1.1fffcccfccfcccfccccccccf............
        ......ccfccfccccccfcccccccccff..........
        ...1.1.ffcccccccccccccccccccccf.fffffff.
        ..11ffffccccccf1cccccccccccccccfccccccf.
        ..fff111111ccccf11ffffffff111cccccccff..
        ..f111ffffffcccfff........fff1ccccff....
        ...ffff....fcccf.............fcccf......
        ............fcccf............fccf.......
        .............ffcf............fccf.......
        ...............ff.............fcf.......
        ..............................fcf.......
        ...............................ff.......
        `,img`
        ....................ffffff..............
        .................fffcccccf..............
        ................fccccccff...............
        ..........ffffffccccccf.................
        .........fcccccccccccf..................
        ......ffffccfccccccccff.................
        .....fcccccccfccfccccccff...............
        ....fccffccfccfccfcccccccff.............
        ...fccf2ccffccfcccfccccccccff...........
        ..fcccccccffccccccfccccccccccff.........
        ffcccccccffccccccccccccccccccccf........
        fcccccccff1cccf1ccccccccccccccccf.ffffff
        .ffffffff11ccccf11ffffffff1111cccfcccccf
        .....f11111fcccfff........ffff1ccccccff.
        ......ffffffcccf..............fccccff...
        ............fcccf.............fcccf.....
        .............ffcf.............fccf......
        ...............ff..............fcf......
        ...............................fcf......
        ................................ff......
        `],
    200,
    true
    )
    鯊魚.follow(槍手, 30)
    鯊魚的血量.attachToSprite(鯊魚, 3, 0)
    鯊魚.setPosition(randint(70, 380), randint(92, 30))
    魟魚 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . f b b b b f . . . . . . . 
        . . f b b b b b b f f . . . . . 
        . f b b b b b b b b b f . . . . 
        f b b 2 b b b b b b b b f f f f 
        . f b b b b b b b b b b b b b f 
        f b b 2 b b b b b b b b f f f f 
        . f b b b b b b b b b f . . . . 
        . . f b b b b b b f f . . . . . 
        . . . f b b b b f . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.魟魚)
    animation.runImageAnimation(
    魟魚,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . f b b b b f . . . . . . . 
        . . f b b b b b b f f . . . . . 
        . f b b b b b b b b b f . . . . 
        f b b 2 b b b b b b b b f f f f 
        . f b b b b b b b b b b b b b f 
        f b b 2 b b b b b b b b f f f f 
        . f b b b b b b b b b f . . . . 
        . . f b b b b b b f f . . . . . 
        . . . f b b b b f . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . f b b b b f . . . . . . . 
        . . f b b b b b b f f . . . f f 
        . f b b b b b b b b b f . f b f 
        f b b 2 b b b b b b b b f b f . 
        . f b b b b b b b b b b b b f . 
        f b b 2 b b b b b b b b f f . . 
        . f b b b b b b b b b f . . . . 
        . . f b b b b b b f f . . . . . 
        . . . f b b b b f . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . f b b b b f . . . . . . . 
        . . f b b b b b b f f . . . . . 
        . f b b b b b b b b b f . . . . 
        f b b 2 b b b b b b b b f f . . 
        . f b b b b b b b b b b b b f . 
        f b b 2 b b b b b b b b f b f . 
        . f b b b b b b b b b f . f b f 
        . . f b b b b b b f f . . . f f 
        . . . f b b b b f . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
    魟魚.follow(射手, 30)
    魟魚的血量.attachToSprite(魟魚, 3, 0)
    魟魚.setPosition(randint(70, 380), randint(92, 30))
    水母 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.水母)
    animation.runImageAnimation(
    水母,
    [img`
        . . . . . f f f f f . . . . . . 
        . . . . f 3 3 3 3 3 f . . . . . 
        . . . f 3 3 3 3 3 3 3 f . . . . 
        . . f f 3 3 3 3 3 3 3 f f . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f f f f f f f f f f f . . . 
        . . . f . f f . f . . f . . . . 
        . . f f . f . . f . . f f . . . 
        . . f . . f . . f f . . f . . . 
        . . f . . f . . . f . . f . . . 
        . . f . . f . . . f . . f . . . 
        . . f f . f f . . f . . f f . . 
        . . . f . . f . . . . . . f . . 
        . . . . . . f . . . . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 3 3 3 3 3 f . . . . . 
        . . . f 3 3 3 3 3 3 3 f . . . . 
        . . f f 3 3 3 3 3 3 3 f f . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f f f f f f f f f f f . . . 
        . . . f . . f . . f . . f . . . 
        . . . f f . f . . f . f f . . . 
        . . . . f . f . f f . f . . . . 
        . . . . f . f . f . . f . . . . 
        . . . . f . f . f . . f . . . . 
        . . . f f f f . f f . f f f . . 
        . . . f . f . . . . . . . f . . 
        . . . . . f . . . . . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 3 3 3 3 3 f . . . . . 
        . . . f 3 3 3 3 3 3 3 f . . . . 
        . . f f 3 3 3 3 3 3 3 f f . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f f f f f f f f f f f . . . 
        . . . f . . f . . f . . f . . . 
        . . . f f . f . . f . f f . . . 
        . . . . f . f . f f . f . . . . 
        . . . . f . f . f . . f . . . . 
        . . . . f . f . f . . f . . . . 
        . . . f f f f . f f . f f f . . 
        . . . f . f . . . . . . . f . . 
        . . . . . f . . . . . . . . . . 
        `],
    200,
    true
    )
    水母.follow(槍手, 30)
    水母的血量.attachToSprite(水母, 3, 0)
    水母.setPosition(randint(70, 380), randint(92, 30))
    龍 = sprites.create(img`
        ...............ffffff...
        ..............f88888f...
        .......f..f..f88888f8f..
        ......f..f..f888fff.ff..
        .....f..f...f88ff8f.....
        .....fffff..f8ff888f....
        .....f8888f.ff88888f....
        ....ff28288ff888888ff...
        ....f8888888fffff888ff..
        ....fffff8888f...ff88f..
        ........fd8888f....fff..
        ......ffffd8888f........
        .....f888fd88888fff...ff
        ....f8f8fffd8888888fff8f
        ....f1f1f..fdd888888888f
        .....f.f..f8888f888888ff
        ..........f8888f888f88f.
        ..........f88ff.f888ff..
        ...........f8f..f88f....
        ...........f8f...f8f....
        ..........f18f..f18f....
        ..........ffff..ffff....
        ........................
        ........................
        `, SpriteKind.龍)
    animation.runImageAnimation(
    龍,
    [img`
        ...............ffffff...
        ..............f88888f...
        .......f..f..f88888f8f..
        ......f..f..f888fff.ff..
        .....f..f...f88ff8f.....
        .....fffff..f8ff888f....
        .....f8888f.ff88888f....
        ....ff28288ff888888ff...
        ....f8888888fffff888ff..
        ....fffff8888f...ff88f..
        ........fd8888f....fff..
        ......ffffd8888f........
        .....f888fd88888fff...ff
        ....f8f8fffd8888888fff8f
        ....f1f1f..fdd888888888f
        .....f.f..f8888f888888ff
        ..........f8888f888f88f.
        ..........f88ff.f888ff..
        ...........f8f..f88f....
        ...........f8f...f8f....
        ..........f18f..f18f....
        ..........ffff..ffff....
        ........................
        ........................
        `,img`
        ...............ffffff...
        ..............f88888f...
        .......f..f..f88888f8f..
        ......f..f..f888fff.ff..
        .....f..f...f88ff8f.....
        .....fffff..f8ff888f....
        .....f8888f.ff88888f....
        .99.ff28288ff888888ff...
        9999f8888888fffff888ff..
        9999fffff8888f...ff88f..
        99999191fd8888f....fff..
        9999ffffffd8888f........
        9999.f888fd88888fff...ff
        .99.f8f8fffd8888888fff8f
        ....f1f1f..fdd888888888f
        .....f.f..f8888f888888ff
        ..........f8888f888f88f.
        ..........f88ff.f888ff..
        ...........f8f..f88f....
        ...........f8f...f8f....
        ..........f18f..f18f....
        ..........ffff..ffff....
        ........................
        ........................
        `],
    500,
    true
    )
    龍.follow(槍手, 50)
    龍的血量.attachToSprite(龍, 3, 0)
    龍.setPosition(380, 92)
    金幣 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . f 5 5 f . . . . . f 5 5 f . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.金幣6)
    金幣.setPosition(randint(70, 380), 92)
    元寶 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . f f f . f 5 5 f . f f f . 
        . . . f 5 5 f 5 5 5 5 f 5 5 f . 
        . . . f 5 5 5 f f f f 5 5 5 f . 
        . . . f f 5 5 5 5 5 5 5 5 f f . 
        . . . . f 5 5 5 5 5 5 5 5 f . . 
        . . . . f f 5 5 5 5 5 5 f f . . 
        . . . . . f f 5 5 5 5 f f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.元寶6)
    元寶.setPosition(randint(70, 380), 92)
    寶箱 = sprites.create(img`
        . . f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e e f . 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 5 e e e e e e e e e e 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f f f f f f f d d f f f f f f f 
        c f f f f f f c c f f f f f f c 
        c c c c c c f c c f c c c c c c 
        f 5 5 5 5 5 c f f c 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f c 5 5 5 5 5 5 5 5 5 5 5 5 c f 
        f f f f f f f f f f f f f f f f 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.寶箱3)
    寶箱.setPosition(randint(280, 380), 92)
    槍手.setKind(SpriteKind.槍手6)
})
sprites.onOverlap(SpriteKind.魔法師2, SpriteKind.狼, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.play槍手, SpriteKind.水母, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    水母的血量.value += -20
})
sprites.onOverlap(SpriteKind.魔法師5, SpriteKind.魟魚, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.play劍士, SpriteKind.食人花, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    食人花的血量.value += -100
})
sprites.onOverlap(SpriteKind.能量2, SpriteKind.鯊魚, function (sprite, otherSprite) {
    sprite.destroy()
    鯊魚的血量.value += -20
})
sprites.onOverlap(SpriteKind.play魔法師, SpriteKind.鯊魚, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    鯊魚的血量.value += -30
})
sprites.onOverlap(SpriteKind.play魔法師, SpriteKind.水母, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    水母的血量.value += -30
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.槍手6, SpriteKind.金幣6, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.劍士4, SpriteKind.金幣4, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
controller.combos.attachCombo("UDUD", function () {
    music.beamUp.play()
    槍手.say("覺醒", 600)
    animation.runImageAnimation(
    槍手,
    [img`
        ........................
        .......fff..............
        ......feeef.............
        ....ffeeeefff...........
        ...fefeeeefeff..........
        ..feeffeeffeeef.........
        ..feeeffffeeeef.........
        ..ffeeeeeeeeef..........
        ...fffffffffff..........
        ....555555ddd...........
        ....55d551fdd......f....
        .....5d5d1fdd...fffff...
        .....5ddddddd..fffe.....
        .....ffffffffffddf......
        ....feeeeeeeeefdf.......
        ...feeeeeeeeefff........
        ..feeeeeeeeeff..........
        .fddffeeeeeef...........
        .fff.feeeeeef...........
        .fe...ffffff............
        ff....eeeeee............
        .f....ee..ee............
        ......ff..ff............
        ......fff.fff...........
        `,img`
        ........................
        .......fff..............
        ......feeef.............
        ....ffeeeefff...........
        ...fefeeeefeff..........
        ..feeffeeffeeef.........
        ..feeeffffeeeef.........
        ..ffeeeeeeeeef..........
        ...fffffffffff..........
        ....555555ddd...........
        ....55d551fdd......f....
        .....5d5d1fdd...fffff...
        .....5ddddddd..fffe.....
        .....ffffffffffddf......
        ....feeeeeeeeefdf.......
        ...feeeeeeeeefff........
        ..feeeeeeeeeff..........
        .fddffeeeeeef...........
        .fff.feeeeeef...........
        .fe...ffffff............
        ff....eeeeee............
        .f....eeeeee............
        ........ff..............
        ........ff..............
        `,img`
        ........................
        .......fff..............
        ......feeef.............
        ....ffeeeefff...........
        ...fefeeeefeff..........
        ..feeffeeffeeef.........
        ..feeeffffeeeef.........
        ..ffeeeeeeeeef..........
        ...fffffffffff..........
        ....555555ddd...........
        ....55d551fdd......f....
        .....5d5d1fdd...fffff...
        .....5ddddddd..fffe.....
        .....ffffffffffddf......
        ....feeeeeeeeefdf.......
        ...feeeeeeeeefff........
        ..feeeeeeeeeff..........
        .fddffeeeeeef...........
        .fff.feeeeeef...........
        .fe...ffffff............
        ff....eeeeee............
        .f....ee..ee............
        ......ff..ff............
        ......fff.fff...........
        `],
    100,
    false
    )
    子彈 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 5 . 5 5 5 5 5 5 4 4 . . . . 
        . . 5 5 5 5 5 5 5 5 4 4 4 . . . 
        . . 5 5 5 5 5 5 5 5 4 4 4 . . . 
        . . 5 . 5 5 5 5 5 5 4 4 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 槍手, 70, 0)
    子彈.startEffect(effects.fire)
    子彈.setKind(SpriteKind.play槍手)
    子彈.setFlag(SpriteFlag.AutoDestroy, true)
    pause(300)
    controller.moveSprite(槍手, 150, 0)
})
sprites.onOverlap(SpriteKind.魔法師3, SpriteKind.旗子3, function (sprite, otherSprite) {
    tiles.setTilemap(tilemap`層級26`)
    魔法師.setStayInScreen(true)
    食人花的血量 = statusbars.create(20, 4, StatusBarKind.食人花)
    食人花的血量.setColor(8, 2)
    向日葵的血量 = statusbars.create(20, 4, StatusBarKind.向日葵)
    向日葵的血量.setColor(8, 2)
    含羞草的血量 = statusbars.create(20, 4, StatusBarKind.含羞草)
    含羞草的血量.setColor(8, 2)
    info.startCountdown(30)
    旗子.setPosition(630, 90)
    sprite.setPosition(0, 92)
    食人花 = sprites.create(img`
        . . . f 1 1 f 1 1 f 1 1 f . . . 
        . . . . f 1 1 f f 1 1 f . . . . 
        . . . f 1 f 1 1 1 1 f 2 f . . . 
        . . . f 2 2 f 1 1 f 2 2 f . . . 
        . . f 2 2 1 1 f f 2 2 2 1 f . . 
        . . f 2 2 1 1 2 2 1 1 2 2 f . . 
        . . . f 2 2 2 2 2 1 1 2 f . . . 
        . . . . f f 1 2 2 2 f f . . . . 
        . f f . . . f f f f . . . f f . 
        f 7 7 f f . f 7 7 f . f f 7 7 f 
        f 7 7 7 7 f f 7 7 f f 7 7 7 7 f 
        f 7 7 f 7 7 f 7 7 f 7 7 f 7 7 f 
        . f 7 7 f 7 f 7 7 f 7 f 7 7 f . 
        . . f f 7 f f 7 7 f f 7 f f . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . . . . f 7 7 f . . . . . . 
        `, SpriteKind.食人花)
    animation.runImageAnimation(
    食人花,
    [img`
        . . . f 1 1 f . . f 1 1 f . . . 
        . . . . f 1 1 f f 1 1 f . . . . 
        . . . f 1 f 1 1 1 1 f 2 f . . . 
        . . . f 2 2 f 1 1 f 2 2 f . . . 
        . . f 2 2 1 1 f f 2 2 2 1 f . . 
        . . f 2 2 1 1 2 2 1 1 2 2 f . . 
        . . . f 2 2 2 2 2 1 1 2 f . . . 
        . . . . f f 1 2 2 2 f f . . . . 
        . f f . . . f f f f . . . f f . 
        f 7 7 f f . f 7 7 f . f f 7 7 f 
        f 7 7 7 7 f f 7 7 f f 7 7 7 7 f 
        f 7 7 f 7 7 f 7 7 f 7 7 f 7 7 f 
        . f 7 7 f 7 f 7 7 f 7 f 7 7 f . 
        . . f f 7 f f 7 7 f f 7 f f . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . . . . f 7 7 f . . . . . . 
        `,img`
        . . . . . . f f . f f f f . . . 
        . . . . . . f 1 f 2 2 2 1 f . . 
        . . . . . . f 1 1 f 2 2 2 f . . 
        . . . . . . . f 1 1 f 2 1 1 f . 
        . . . . . . . . f 1 f 2 1 1 f . 
        . . . . . . . f 1 1 f 1 2 2 f . 
        . . . . . . f 1 1 f 1 1 2 f . . 
        . . . . . . f 1 f 1 2 2 2 f . . 
        . . . . . . f f . f f f f . . . 
        . . . . f f . . . . f 7 7 f . . 
        . . . f 7 7 f . . . f 7 7 f f f 
        . . . f 7 7 7 f . f 7 7 f f 7 7 
        . . . . f f 7 7 f f 7 7 f 7 7 f 
        . . . . . . f f 7 7 7 f f f f . 
        . . . . . . f 7 7 7 f f . . . . 
        . . . . . . f 7 7 f . . . . . . 
        `,img`
        . . . . . . f f . f f f f . . . 
        . . . . . . f 1 f 2 2 2 1 f . . 
        . . . . . . f 1 1 f 2 2 2 f . . 
        . . . . . . . f 1 1 f 2 1 1 f . 
        . . . . . . . 4 f 1 f 2 1 1 f . 
        . . . . . . . f 1 1 f 1 2 2 f . 
        . . . . . . f 1 1 f 1 1 2 f . . 
        . . . . . . f 1 f 1 2 2 2 f . . 
        . . . . . . f f . f f f f . . . 
        . . . . f f . . . . f 7 7 f . . 
        . . . f 7 7 f . . . f 7 7 f f f 
        . . . f 7 7 7 f . f 7 7 f f 7 7 
        . . . . f f 7 7 f f 7 7 f 7 7 f 
        . . . . . . f f 7 7 7 f f f f . 
        . . . . . . f 7 7 7 f f . . . . 
        . . . . . . f 7 7 f . . . . . . 
        `,img`
        . . . . . . f f . f f f f . . . 
        . . . . . . f 1 f 2 2 2 1 f . . 
        . . . . . . f 1 1 f 2 2 2 f . . 
        . . . . . . . f 1 1 f 2 1 1 f . 
        . . . . 4 . . . f 1 f 2 1 1 f . 
        . . . . . . . f 1 1 f 1 2 2 f . 
        . . . . . . f 1 1 f 1 1 2 f . . 
        . . . . . . f 1 f 1 2 2 2 f . . 
        . . . . . . f f . f f f f . . . 
        . . . . f f . . . . f 7 7 f . . 
        . . . f 7 7 f . . . f 7 7 f f f 
        . . . f 7 7 7 f . f 7 7 f f 7 7 
        . . . . f f 7 7 f f 7 7 f 7 7 f 
        . . . . . . f f 7 7 7 f f f f . 
        . . . . . . f 7 7 7 f f . . . . 
        . . . . . . f 7 7 f . . . . . . 
        `],
    500,
    true
    )
    食人花的血量.attachToSprite(食人花, 3, 0)
    食人花.setPosition(randint(70, 380), 92)
    向日葵 = sprites.create(img`
        .......f5555f...fffff...
        ......f555555fff55555f..
        ..fffff55555555555555f..
        .f5555f55eeeeee555555f..
        f555555eee4444eee5555f..
        f55555ee44444444ee555f..
        f55555e4444444444e55f...
        ff555ee4444444444ee5f...
        .fff5e444244442444e55ff.
        ..f55e444444444444e5555f
        .f555e444444444444e55555
        f5555e444222222444e55555
        f5555ee442ffff244ee55555
        f55555e4422222244e55555f
        f55555ee44444444ee5555f.
        .f55555eee4444eee5555f..
        ..fff5555eeeeee55555f...
        .....f55555ee5555555f...
        .....f55555eef555555f...
        .....f5555fee.f55555f...
        ......f777.ee.777fff....
        ......77777ee77777......
        ......777777777777......
        .......7777777777.......
        `, SpriteKind.向日葵)
    animation.runImageAnimation(
    向日葵,
    [img`
        .......f5555f...fffff...
        ......f555555fff55555f..
        ..fffff55555555555555f..
        .f5555f55eeeeee555555f..
        f555555eee4444eee5555f..
        f55555ee44444444ee555f..
        f55555e4444444444e55f...
        ff555ee4444444444ee5f...
        .fff5e444244442444e55ff.
        ..f55e444444444444e5555f
        .f555e444444444444e55555
        f5555e444222222444e55555
        f5555ee442ffff244ee55555
        f55555e4422222244e55555f
        f55555ee44444444ee5555f.
        .f55555eee4444eee5555f..
        ..fff5555eeeeee55555f...
        .....f55555ee5555555f...
        .....f55555eef555555f...
        .....f5555fee.f55555f...
        ......f777.ee.777fff....
        ......77777ee77777......
        ......777777777777......
        .......7777777777.......
        `,img`
        ..ee...f5555f.e.fffff.e.
        e....ef555555fff55555f..
        ..fffff55555555555555f.e
        .f5555f55eeeeee555555f..
        f555555eee4444eee5555f.e
        f55555ee44444444ee555f..
        f55555e4444444444e55f.e.
        ff555ee4444444444ee5f...
        .fff5e444244442444e55ff.
        ..f55e444444444444e5555f
        .f555e444444444444e55555
        f5555e444442224444e55555
        f5555ee44442f2444ee55555
        f55555e4444222444e55555f
        f55555ee44444444ee5555f.
        .f55555eee4444eee5555f..
        ..fff5555eeeeee55555f..e
        e..e.f55555ee5555555fe..
        .....f55555eef555555f...
        ..e..f5555fee.f55555f.e.
        e....ef777.ee.777fff....
        ......77777ee77777...e..
        .e.e..777777777777.e..e.
        .......7777777777.......
        `],
    500,
    true
    )
    向日葵的血量.attachToSprite(向日葵, 3, 0)
    向日葵.setPosition(randint(70, 380), 92)
    含羞草 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f . . . . . . . . . 
        . . f 7 7 7 7 f . . . . . . . . 
        . . . f 7 7 f . . . f . . . . . 
        . . . f 7 7 7 f . f 7 f . . . . 
        . . f 7 7 f 7 7 f 7 7 f . . . . 
        . . f 7 f . f 7 7 7 f . . . . . 
        . . . f . . f 7 7 f . . . . . . 
        . . . . . f 7 7 7 f . f f f . . 
        . . . . f 7 7 f 7 7 f f 7 7 f . 
        . . . . . f f . f 7 f 7 7 f . . 
        . . . . . . . . f 7 7 7 f . . . 
        . . . . . . . f 7 7 7 f . . . . 
        . . . . . . f 7 7 f 7 7 f . . . 
        . . . . . . . f f . f 7 f . . . 
        . . . . . . . . . . f 7 f . . . 
        `, SpriteKind.含羞草)
    animation.runImageAnimation(
    含羞草,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f . . . . . . . . . 
        . . f 7 7 7 7 f . . . . . . . . 
        . . . f 7 7 f . . . f . . . . . 
        . . . f 7 7 7 f . f 7 f . . . . 
        . . f 7 7 f 7 7 f 7 7 f . . . . 
        . . f 7 f . f 7 7 7 f . . . . . 
        . . . f . . f 7 7 f . . . . . . 
        . . . . . f 7 7 7 f . f f f . . 
        . . . . f 7 7 f 7 7 f f 7 7 f . 
        . . . . . f f . f 7 f 7 7 f . . 
        . . . . . . . . f 7 7 7 f . . . 
        . . . . . . . f 7 7 7 f . . . . 
        . . . . . . f 7 7 f 7 7 f . . . 
        . . . . . . . f f . f 7 f . . . 
        . . . . . . . . . . f 7 f . . . 
        `],
    500,
    true
    )
    含羞草的血量.attachToSprite(含羞草, 3, 0)
    含羞草.setPosition(randint(70, 380), 92)
    金幣 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . f 5 5 f . . . . . f 5 5 f . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.金幣4)
    金幣.setPosition(randint(70, 380), 92)
    元寶 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . f f f . f 5 5 f . f f f . 
        . . . f 5 5 f 5 5 5 5 f 5 5 f . 
        . . . f 5 5 5 f f f f 5 5 5 f . 
        . . . f f 5 5 5 5 5 5 5 5 f f . 
        . . . . f 5 5 5 5 5 5 5 5 f . . 
        . . . . f f 5 5 5 5 5 5 f f . . 
        . . . . . f f 5 5 5 5 f f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.元寶4)
    元寶.setPosition(randint(70, 380), 92)
    寶箱 = sprites.create(img`
        . . f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e e f . 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 5 e e e e e e e e e e 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f f f f f f f d d f f f f f f f 
        c f f f f f f c c f f f f f f c 
        c c c c c c f c c f c c c c c c 
        f 5 5 5 5 5 c f f c 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f c 5 5 5 5 5 5 5 5 5 5 5 5 c f 
        f f f f f f f f f f f f f f f f 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.寶箱)
    寶箱.setPosition(randint(280, 380), 92)
    生命 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . f f . . . . 
        . . . . f 2 2 f . f 2 2 f . . . 
        . . . f 2 2 2 2 f 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . . f 2 2 2 2 2 2 2 f . . . 
        . . . . . f 2 2 2 2 2 f . . . . 
        . . . . . . f 2 2 2 f . . . . . 
        . . . . . . . f 2 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.生命4)
    生命.setPosition(randint(70, 380), 92)
    旗子.setKind(SpriteKind.旗子4)
    魔法師.setKind(SpriteKind.魔法師4)
})
sprites.onOverlap(SpriteKind.play魔法師, SpriteKind.鬼怪, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    鬼怪的血量.value += -30
})
sprites.onOverlap(SpriteKind.射手3, SpriteKind.螳螂, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(70, 380), 92)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.play槍手, SpriteKind.鯊魚, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    鯊魚的血量.value += -20
})
controller.combos.attachCombo("UUDD", function () {
    music.beamUp.play()
    劍士.say("一刀斃命", 600)
    animation.runImageAnimation(
    劍士,
    [img`
        ..............................
        .......fff.......fff..........
        ...ffff222f.....fccf..........
        ..f22222222f...fcccf..........
        .ffffffffffff.fcccf...........
        .fdddddddfffefcccf............
        ffdddd1fdddfeeccf.............
        fddddd1fdddffeef..............
        .fdddddddddfefeef.............
        ..fffffffffdf.ff..............
        ...f22f222df..................
        ...f22fffff...................
        ...f222222f...................
        ...ffffffff...................
        ...6666666....................
        ...ff..ff.....................
        ...fff.fff....................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `,img`
        ..............................
        .......fff....................
        ...ffff222f...................
        ..f22222222f..................
        .fffffffffff..................
        .fdddddddfff..................
        ffdddd1fdddf..................
        fddddd1fdddf..ff..............
        .fdddddddddf.feef.............
        ..ffffffffffffefffffffff......
        ...f22f222fddeeccccccccf......
        ...f22ffffffffefffffffff......
        ...f222222f..feef.............
        ...ffffffff...ff..............
        ...6666666....................
        .....fff......................
        .....fff......................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `,img`
        ..............................
        .......fff....................
        ...ffff222f........fff........
        ..f22222222f......fccf........
        .fffffffffff.....fcccf........
        .fdddddddfff....fcccf.........
        ffdddd1fdddf.f.fcccf..........
        fddddd1fdddffefcccf...........
        .fdddddddddffeeccf............
        ..ffffffffffffeef.............
        ...f22f222fddefeef............
        ...f22ffffffff.ff.............
        ...f222222f...................
        ...ffffffff...................
        ...666.666....................
        ...ff..ff.....................
        ...fff.fff....................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `],
    100,
    false
    )
    刀 = sprites.createProjectileFromSprite(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        .......55555555.........
        .........5555555........
        ..........5555555.......
        ..........5555555.......
        ...........555555.......
        ...........555555.......
        ...........555555.......
        ..........5555555.......
        ..........5555555.......
        .........5555555........
        .......55555555.........
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, 劍士, 40, 0)
    刀.startEffect(effects.warmRadial)
    刀.setKind(SpriteKind.play劍士)
    刀.setFlag(SpriteFlag.AutoDestroy, true)
    pause(500)
})
sprites.onOverlap(SpriteKind.射手4, SpriteKind.旗子4, function (sprite, otherSprite) {
    tiles.setTilemap(tilemap`層級31`)
    射手.setStayInScreen(true)
    鯊魚的血量 = statusbars.create(20, 4, StatusBarKind.鯊魚)
    鯊魚的血量.setColor(8, 2)
    魟魚的血量 = statusbars.create(20, 4, StatusBarKind.魟魚)
    魟魚的血量.setColor(8, 2)
    水母的血量 = statusbars.create(20, 4, StatusBarKind.水母)
    水母的血量.setColor(8, 2)
    info.startCountdown(30)
    旗子.setPosition(630, 90)
    sprite.setPosition(0, 92)
    鯊魚 = sprites.create(img`
        ....................ffffff..............
        .................fffcccccf..............
        ................fccccccff...............
        ..........ffffffccccccf.................
        .......fffcccccccccccf..................
        .....ffcccccfccccccccff.................
        ....fccffccccfccfccccccff...............
        ...fccf2cccfccfccfcccccccff.............
        ..fcccccccffccfcccfccccccccff...........
        .fcccccccf1fccccccfccccccccccff.........
        fcccccfff3fccccccccccccccccccccf........
        .fffff133f1cccf1ccccccccccccccccf.ffffff
        ....fffff11ccccf11ffffffff1111cccfcccccf
        .....f11111fcccfff........ffff1ccccccff.
        ......ffffffcccf..............fccccff...
        ............fcccf.............fcccf.....
        .............ffcf.............fccf......
        ...............ff..............fcf......
        ...............................fcf......
        ................................ff......
        `, SpriteKind.鯊魚)
    animation.runImageAnimation(
    鯊魚,
    [img`
        ....................ffffff..............
        .................fffcccccf..............
        ................fccccccff...............
        ..........ffffffccccccf.................
        .......fffcccccccccccf..................
        .....ffcccccfccccccccff.................
        ....fccffccccfccfccccccff...............
        ...fccf2cccfccfccfcccccccff.............
        ..fcccccccffccfcccfccccccccff...........
        .fcccccccf1fccccccfccccccccccff.........
        fcccccfff3fccccccccccccccccccccf........
        .fffff133f1cccf1ccccccccccccccccf.ffffff
        ....fffff11ccccf11ffffffff1111cccfcccccf
        .....f11111fcccfff........ffff1ccccccff.
        ......ffffffcccf..............fccccff...
        ............fcccf.............fcccf.....
        .............ffcf.............fccf......
        ...............ff..............fcf......
        ...............................fcf......
        ................................ff......
        `,img`
        ....................ffffff..............
        .................fffcccccf..............
        ................fccccccff...............
        ....ffffffffffffccccccf.................
        ..ffcccccccccccccccccf..................
        .ffcccccffccfccccccccff.................
        .1ffcccf2ccccfccfccccccff...............
        ..1ffccccccfccfccfcccccccff.............
        ..1.1fffcccfccfcccfccccccccf............
        ......ccfccfccccccfcccccccccff..........
        ...1.1.ffcccccccccccccccccccccf.fffffff.
        ..11ffffccccccf1cccccccccccccccfccccccf.
        ..fff111111ccccf11ffffffff111cccccccff..
        ..f111ffffffcccfff........fff1ccccff....
        ...ffff....fcccf.............fcccf......
        ............fcccf............fccf.......
        .............ffcf............fccf.......
        ...............ff.............fcf.......
        ..............................fcf.......
        ...............................ff.......
        `,img`
        ....................ffffff..............
        .................fffcccccf..............
        ................fccccccff...............
        ..........ffffffccccccf.................
        .........fcccccccccccf..................
        ......ffffccfccccccccff.................
        .....fcccccccfccfccccccff...............
        ....fccffccfccfccfcccccccff.............
        ...fccf2ccffccfcccfccccccccff...........
        ..fcccccccffccccccfccccccccccff.........
        ffcccccccffccccccccccccccccccccf........
        fcccccccff1cccf1ccccccccccccccccf.ffffff
        .ffffffff11ccccf11ffffffff1111cccfcccccf
        .....f11111fcccfff........ffff1ccccccff.
        ......ffffffcccf..............fccccff...
        ............fcccf.............fcccf.....
        .............ffcf.............fccf......
        ...............ff..............fcf......
        ...............................fcf......
        ................................ff......
        `],
    200,
    true
    )
    鯊魚.follow(射手, 30)
    鯊魚的血量.attachToSprite(鯊魚, 3, 0)
    鯊魚.setPosition(randint(70, 380), randint(92, 30))
    魟魚 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . f b b b b f . . . . . . . 
        . . f b b b b b b f f . . . . . 
        . f b b b b b b b b b f . . . . 
        f b b 2 b b b b b b b b f f f f 
        . f b b b b b b b b b b b b b f 
        f b b 2 b b b b b b b b f f f f 
        . f b b b b b b b b b f . . . . 
        . . f b b b b b b f f . . . . . 
        . . . f b b b b f . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.魟魚)
    animation.runImageAnimation(
    魟魚,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . f b b b b f . . . . . . . 
        . . f b b b b b b f f . . . . . 
        . f b b b b b b b b b f . . . . 
        f b b 2 b b b b b b b b f f f f 
        . f b b b b b b b b b b b b b f 
        f b b 2 b b b b b b b b f f f f 
        . f b b b b b b b b b f . . . . 
        . . f b b b b b b f f . . . . . 
        . . . f b b b b f . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . f b b b b f . . . . . . . 
        . . f b b b b b b f f . . . f f 
        . f b b b b b b b b b f . f b f 
        f b b 2 b b b b b b b b f b f . 
        . f b b b b b b b b b b b b f . 
        f b b 2 b b b b b b b b f f . . 
        . f b b b b b b b b b f . . . . 
        . . f b b b b b b f f . . . . . 
        . . . f b b b b f . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . f b b b b f . . . . . . . 
        . . f b b b b b b f f . . . . . 
        . f b b b b b b b b b f . . . . 
        f b b 2 b b b b b b b b f f . . 
        . f b b b b b b b b b b b b f . 
        f b b 2 b b b b b b b b f b f . 
        . f b b b b b b b b b f . f b f 
        . . f b b b b b b f f . . . f f 
        . . . f b b b b f . . . . . . . 
        . . . . f b b f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
    魟魚.follow(射手, 30)
    魟魚的血量.attachToSprite(魟魚, 3, 0)
    魟魚.setPosition(randint(70, 380), randint(92, 30))
    水母 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.水母)
    animation.runImageAnimation(
    水母,
    [img`
        . . . . . f f f f f . . . . . . 
        . . . . f 3 3 3 3 3 f . . . . . 
        . . . f 3 3 3 3 3 3 3 f . . . . 
        . . f f 3 3 3 3 3 3 3 f f . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f f f f f f f f f f f . . . 
        . . . f . f f . f . . f . . . . 
        . . f f . f . . f . . f f . . . 
        . . f . . f . . f f . . f . . . 
        . . f . . f . . . f . . f . . . 
        . . f . . f . . . f . . f . . . 
        . . f f . f f . . f . . f f . . 
        . . . f . . f . . . . . . f . . 
        . . . . . . f . . . . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 3 3 3 3 3 f . . . . . 
        . . . f 3 3 3 3 3 3 3 f . . . . 
        . . f f 3 3 3 3 3 3 3 f f . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f f f f f f f f f f f . . . 
        . . . f . . f . . f . . f . . . 
        . . . f f . f . . f . f f . . . 
        . . . . f . f . f f . f . . . . 
        . . . . f . f . f . . f . . . . 
        . . . . f . f . f . . f . . . . 
        . . . f f f f . f f . f f f . . 
        . . . f . f . . . . . . . f . . 
        . . . . . f . . . . . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 3 3 3 3 3 f . . . . . 
        . . . f 3 3 3 3 3 3 3 f . . . . 
        . . f f 3 3 3 3 3 3 3 f f . . . 
        . . f 3 3 3 3 3 3 3 3 3 f . . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f f f f f f f f f f f . . . 
        . . . f . . f . . f . . f . . . 
        . . . f f . f . . f . f f . . . 
        . . . . f . f . f f . f . . . . 
        . . . . f . f . f . . f . . . . 
        . . . . f . f . f . . f . . . . 
        . . . f f f f . f f . f f f . . 
        . . . f . f . . . . . . . f . . 
        . . . . . f . . . . . . . . . . 
        `],
    200,
    true
    )
    水母.follow(射手, 30)
    水母的血量.attachToSprite(水母, 3, 0)
    水母.setPosition(randint(70, 380), randint(92, 30))
    金幣 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . f 5 5 f . . . . . f 5 5 f . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.金幣5)
    金幣.setPosition(randint(70, 380), 92)
    元寶 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . f f f . f 5 5 f . f f f . 
        . . . f 5 5 f 5 5 5 5 f 5 5 f . 
        . . . f 5 5 5 f f f f 5 5 5 f . 
        . . . f f 5 5 5 5 5 5 5 5 f f . 
        . . . . f 5 5 5 5 5 5 5 5 f . . 
        . . . . f f 5 5 5 5 5 5 f f . . 
        . . . . . f f 5 5 5 5 f f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.元寶5)
    元寶.setPosition(randint(70, 380), 92)
    寶箱 = sprites.create(img`
        . . f f f f f f f f f f f f . . 
        . f e e e e e e e e e e e e f . 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 e e e e e e e e e e e e 5 f 
        f 5 5 e e e e e e e e e e 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f f f f f f f d d f f f f f f f 
        c f f f f f f c c f f f f f f c 
        c c c c c c f c c f c c c c c c 
        f 5 5 5 5 5 c f f c 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f c 5 5 5 5 5 5 5 5 5 5 5 5 c f 
        f f f f f f f f f f f f f f f f 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.寶箱2)
    寶箱.setPosition(randint(280, 380), 92)
    生命 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . f f . . . . 
        . . . . f 2 2 f . f 2 2 f . . . 
        . . . f 2 2 2 2 f 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . . f 2 2 2 2 2 2 2 f . . . 
        . . . . . f 2 2 2 2 2 f . . . . 
        . . . . . . f 2 2 2 f . . . . . 
        . . . . . . . f 2 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.生命5)
    生命.setPosition(randint(70, 380), 92)
    旗子.setKind(SpriteKind.旗子5)
    射手.setKind(SpriteKind.射手5)
})
sprites.onOverlap(SpriteKind.能量4, SpriteKind.食人花, function (sprite, otherSprite) {
    sprite.destroy()
    食人花的血量.value += -20
})
controller.combos.attachCombo("AABB", function () {
    music.beamUp.play()
    射手.say("毒藥之箭", 600)
    animation.runImageAnimation(
    射手,
    [img`
        ..............................
        ......fffff...................
        .....feeeeef..ff..............
        ....feeeeeeef.f.f.............
        ....feeeeeeef.f..f............
        ....feeeedddf.f...f...........
        ....feeee1fdf.f...f.f.........
        ..1.feeed1fdff1fffffff........
        .1.1feffddddfdf...f.f.........
        ..1feef86fffdff..f............
        ..ffffff886ff.f.f.............
        ...ffffdf86f..ff..............
        ....fffdf6ff..................
        .....fdf868f..................
        ......ff88f...................
        .......f668f..................
        .......f868f..................
        .......f88ff..................
        .......fff....................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `,img`
        ..............................
        ......fffff...................
        .....feeeeef..ff..............
        ....feeeeeeef.f.f.............
        ....feeeeeeef.f..f............
        ....feeeedddf.f...f...........
        ....feeee1fdf.f...f.f.........
        ..1.feeed1fdff1fffffff........
        .1.1feffddddfdf...f.f.........
        ..1feeffffffdff..f............
        ..fff68fdddff.f.f.............
        ...ff86fffff..ff..............
        ....fffff6ff..................
        .......f868f..................
        .......f88f...................
        .......f668f..................
        .......f868f..................
        .......f88ff..................
        .......fff....................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `,img`
        ..............................
        ......fffff...................
        .....feeeeef..ff..............
        ....feeeeeeef.f.f.............
        ....feeeeeeef.f..f............
        ....feeeedddf.f...f...........
        ....feeee1fdf.f...f.f.........
        ..1.feeed1fdff1fffffff........
        .1.1feffddddfdf...f.f.........
        ..1feef86fffdff..f............
        ..ffffff886ff.f.f.............
        ...ffffdf86f..ff..............
        ....fffdf6f...................
        .....fdf868f..................
        ......f6fff...................
        .......f66f...................
        .......f86f...................
        .......f88f...................
        ........ff....................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `,img`
        ..............................
        ......fffff...................
        .....feeeeef..ff..............
        ....feeeeeeef.f.f.............
        ....feeeeeeef.f..f............
        ....feeeedddf.f...f...........
        ....feeee1fdf.f...f.f.........
        ..1.feeed1fdff1fffffff........
        .1.1feffddddfdf...f.f.........
        ..1feef86fffdff..f............
        ..ffffff886ff.f.f.............
        ...ffffdf86f..ff..............
        ....fffdf6ff..................
        .....fdf868f..................
        ......ff88f...................
        .......f668f..................
        .......f868f..................
        .......f88ff..................
        .......fff....................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `],
    100,
    false
    )
    箭 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . . . f a . . . . . 
        . . . . 1 f f f f f a a . . . . 
        . . . . . . . . . f a . . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 射手, 35, 0)
    箭.startEffect(effects.warmRadial)
    箭.setKind(SpriteKind.play射手)
    箭.setFlag(SpriteFlag.AutoDestroy, true)
    pause(500)
})
sprites.onOverlap(SpriteKind.能量1, SpriteKind.蜜蜂, function (sprite, otherSprite) {
    sprite.destroy()
    蜜蜂的血量.value += -20
})
sprites.onOverlap(SpriteKind.槍手1, SpriteKind.旗子1, function (sprite, otherSprite) {
    tiles.setTilemap(tilemap`層級18`)
    槍手.setStayInScreen(true)
    蟒蛇的血量 = statusbars.create(20, 4, StatusBarKind.蟒蛇)
    蟒蛇的血量.setColor(8, 2)
    狼的血量 = statusbars.create(20, 4, StatusBarKind.狼)
    狼的血量.setColor(8, 2)
    老虎的血量 = statusbars.create(20, 4, StatusBarKind.老虎)
    老虎的血量.setColor(8, 2)
    info.startCountdown(30)
    旗子.setPosition(630, 90)
    sprite.setPosition(0, 92)
    蟒蛇 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f 7 7 7 7 7 f . . . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . f 7 2 7 7 2 7 7 f . . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . . . f 2 f f f f f . . . . 
        . . . f f 7 2 f 7 7 7 f f . . . 
        . . f 7 7 7 f 7 7 7 7 f 7 f . . 
        . f 7 7 f 7 7 7 7 7 f 7 7 7 f . 
        . f 7 7 7 f f f f f 7 7 7 f 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 f 7 f 
        . . f 7 7 7 7 7 7 7 7 7 f f 7 f 
        . . . f f f f f f f f f . . f . 
        `, SpriteKind.蟒蛇)
    animation.runImageAnimation(
    蟒蛇,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f 7 7 7 7 7 f . . . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . f 7 2 7 7 2 7 7 f . . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . . . f 2 f f f f f . . . . 
        . . . f f 7 2 f 7 7 7 f f . . . 
        . . f 7 7 7 f 7 7 7 7 f 7 f . . 
        . f 7 7 f 7 7 7 7 7 f 7 7 7 f . 
        . f 7 7 7 f f f f f 7 7 7 f 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 f 7 f 
        . . f 7 7 7 7 7 7 7 7 7 f f 7 f 
        . . . f f f f f f f f f . . f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f f f f . . . 
        . . . . . . . f 7 7 7 7 7 f . . 
        . . . . . . . f 7 7 7 7 7 7 f . 
        . . . . . . f 7 2 7 7 2 7 7 f . 
        f f . . . . f 7 7 7 7 7 7 7 7 f 
        f 7 f f . . f f 7 7 7 7 7 7 7 f 
        . f 7 f f . . f 2 f f f f f f f 
        . f 7 7 f f . . 2 f 7 7 7 7 f . 
        . . f 7 7 f f . . f 7 7 7 7 f . 
        . . f 7 7 7 f f f f 7 7 7 7 f . 
        . . . f 7 7 7 7 7 7 7 7 7 7 f . 
        . . . f f f 7 7 7 7 7 7 7 7 f . 
        . . . . . f f f f 7 7 7 f f f . 
        . . . . . . . . f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
    蟒蛇.follow(槍手, 30)
    蟒蛇的血量.attachToSprite(蟒蛇, 3, 0)
    蟒蛇.setPosition(randint(70, 380), 92)
    狼 = sprites.create(img`
        ........................
        ........................
        .....ff.ff..............
        .....fcfcf..............
        ....fccccff.............
        ....fc2cccfffffff.......
        ...fccccccccccccfff.....
        ...fccccccccccccccff....
        ....fffccccccccccccf....
        .......fcccccccccccff...
        ......fccffffffcffccf...
        .....ffcfcf..ffcf.fcf...
        .....fccfcf.fcfcf.fcf...
        ....fccffff.ffccf.fff...
        ....ffff.....ffff.ff....
        ........................
        `, SpriteKind.狼)
    animation.runImageAnimation(
    狼,
    [img`
        ........................
        ........................
        .....ff.ff..............
        .....fcfcf..............
        ....fccccff.............
        ....fc2cccfffffff.......
        ...fccccccccccccfff.....
        ...fccccccccccccccff....
        ....fffccccccccccccf....
        .......fcccccccccccff...
        ......fccffffffcffccf...
        .....ffcfcf..ffcf.fcf...
        .....fccfcf.fcfcf.fcf...
        ....fccffff.ffccf.fff...
        ....ffff.....ffff.......
        ........................
        `,img`
        ........................
        ........................
        .....ff.ff..............
        .....fcfcf..............
        ....fccccff.............
        ....fc2cccfffffff.......
        ...fccccccccccccfff.....
        ...f1f1cccccccccccff....
        ....fccccccccccccccf....
        ....ffffcccccccccccff...
        ......fccffffffcffccf...
        .....ffcfcf..ffcf.fcf...
        .....fccfcf.fcfcf.fcf...
        ....fccffff.ffccf.fff...
        ....ffff.....ffff.......
        ........................
        `,img`
        ........................
        ........................
        .....ff.ff..............
        .....fcfcf..............
        ....fccccff.............
        ....fc2cccfffffff.......
        ...fccccccccccccfff.....
        ...fccccccccccccccff....
        ....fffccccccccccccf....
        .......fcccccccccccff...
        ......fccffffffcffccf...
        .....ffcfcf..ffcf.fcf...
        .....fccfcf.fcfcf.fcf...
        ....fccffff.ffccf.fff...
        ....ffff.....ffff.......
        ........................
        `],
    200,
    true
    )
    狼.follow(槍手, 30)
    狼的血量.attachToSprite(狼, 3, 0)
    狼.setPosition(randint(70, 380), 92)
    老虎 = sprites.create(img`
        ........................
        .ff....ff...............
        .f4ffff4f...............
        ..ff4f4f................
        .f44444fff..............
        .f42424f4fffffffff......
        .ff444ff44f444f444f.....
        ..f121f444f4f4f4f44f....
        ...fff444444f4f4f444f...
        .....f4f4f44f444f4444f..
        .....f4f4ffffff444ff4f..
        ......f44f4f.f4f44f.f4f.
        .......f4f4fff4ff4f..f4f
        ......ff4ffff11ff4f..f4f
        ......f11f..ffff11f...f.
        ......ffff.....ffff.....
        `, SpriteKind.老虎)
    animation.runImageAnimation(
    老虎,
    [img`
        ........................
        .ff....ff...............
        .f4ffff4f...............
        ..ff4f4f................
        .f44444fff..............
        .f42424f4fffffffff......
        .ff444ff44f444f444f.....
        ..f121f444f4f4f4f44f....
        ...fff444444f4f4f444f...
        .....f4f4f44f444f4444f..
        .....f4f4ffffff444ff4f..
        ......f44f4f.f4f44f.f4f.
        .......f4f4fff4ff4f..f4f
        ......ff4ffff11ff4f..f4f
        ......f11f..ffff11f...f.
        ......ffff.....ffff.....
        `,img`
        ........................
        .ff....ff...............
        .f4ffff4f...............
        ..ff4f4f................
        .f44444fff..............
        .f42424f4fffffffff......
        .ff444ff44f444f444f.....
        ..f121f444f4f4f4f44f....
        ...fff444444f4f4f444f...
        ..f4ff4f4f44f444f4444f..
        ff4f.f4f4ffffff444ff4f..
        14f...f44f...f4f44f.f4f.
        fff....f4f..ff4ff4f..f4f
        ......ff4f..f11ff4f..f4f
        ......f11f..ffff11f...f.
        ......ffff.....ffff.....
        `],
    200,
    true
    )
    老虎.follow(槍手, 30)
    老虎的血量.attachToSprite(老虎, 3, 0)
    老虎.setPosition(randint(70, 380), 92)
    金幣 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . f 5 5 f . . . . . f 5 5 f . . 
        . f 5 5 5 f . . . f 5 5 5 f . . 
        . . f 5 5 5 f . f 5 5 5 f . . . 
        . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 f f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.金幣2)
    金幣.setPosition(randint(70, 380), 92)
    元寶 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . f f f . f 5 5 f . f f f . 
        . . . f 5 5 f 5 5 5 5 f 5 5 f . 
        . . . f 5 5 5 f f f f 5 5 5 f . 
        . . . f f 5 5 5 5 5 5 5 5 f f . 
        . . . . f 5 5 5 5 5 5 5 5 f . . 
        . . . . f f 5 5 5 5 5 5 f f . . 
        . . . . . f f 5 5 5 5 f f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.元寶2)
    元寶.setPosition(randint(70, 380), 92)
    生命 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . f f . . . . 
        . . . . f 2 2 f . f 2 2 f . . . 
        . . . f 2 2 2 2 f 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 2 f . . 
        . . . . f 2 2 2 2 2 2 2 f . . . 
        . . . . . f 2 2 2 2 2 f . . . . 
        . . . . . . f 2 2 2 f . . . . . 
        . . . . . . . f 2 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.生命2)
    生命.setPosition(randint(70, 380), 92)
    旗子.setKind(SpriteKind.旗子2)
    槍手.setKind(SpriteKind.槍手2)
})
sprites.onOverlap(SpriteKind.能量1, SpriteKind.殭屍, function (sprite, otherSprite) {
    sprite.destroy()
    殭屍的血量.value += -20
})
sprites.onOverlap(SpriteKind.射手2, SpriteKind.金幣2, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.劍士1, SpriteKind.金幣, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.能量4, SpriteKind.水母, function (sprite, otherSprite) {
    sprite.destroy()
    水母的血量.value += -20
})
let 箭: Sprite = null
let 刀: Sprite = null
let 子彈: Sprite = null
let 能量4: Sprite = null
let 能量2: Sprite = null
let 蜘蛛: Sprite = null
let 能量1: Sprite = null
let 能量3: Sprite = null
let 貝殼: Sprite = null
let 蜜蜂: Sprite = null
let 蝙蝠: Sprite = null
let 鬼怪: Sprite = null
let 殭屍: Sprite = null
let 鬼怪的血量: StatusBarSprite = null
let 魔法球: Sprite = null
let 龍: Sprite = null
let 殭屍的血量: StatusBarSprite = null
let 狼: Sprite = null
let 蟒蛇: Sprite = null
let 老虎的血量: StatusBarSprite = null
let 狼的血量: StatusBarSprite = null
let 含羞草: Sprite = null
let 向日葵: Sprite = null
let 食人花: Sprite = null
let 含羞草的血量: StatusBarSprite = null
let 向日葵的血量: StatusBarSprite = null
let 老虎: Sprite = null
let 螳螂: Sprite = null
let 龍的血量: StatusBarSprite = null
let 蟒蛇的血量: StatusBarSprite = null
let 生命: Sprite = null
let 寶箱: Sprite = null
let 元寶: Sprite = null
let 金幣: Sprite = null
let 水母: Sprite = null
let 魟魚: Sprite = null
let 鯊魚: Sprite = null
let 魟魚的血量: StatusBarSprite = null
let 鯊魚的血量: StatusBarSprite = null
let 食人花的血量: StatusBarSprite = null
let 蝙蝠的血量: StatusBarSprite = null
let 蜘蛛的血量: StatusBarSprite = null
let 螳螂的血量: StatusBarSprite = null
let 水母的血量: StatusBarSprite = null
let 蜜蜂的血量: StatusBarSprite = null
let 旗子: Sprite = null
let 箭頭: Sprite = null
let 槍手: Sprite = null
let 魔法師: Sprite = null
let 射手: Sprite = null
let 劍士: Sprite = null
tiles.setTilemap(tilemap`層級13`)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . f 1 1 1 1 1 f . . . . . 
    . . . f 1 1 1 1 1 1 1 f . . . . 
    . . . . f 1 1 1 1 1 f . . . . . 
    . . . . . f 1 1 1 f . . . . . . 
    . . . . . . f 1 f . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
game.splash("\"Gift of nature\"")
game.splash("世界上有一顆讓世界萬物保持平衡的寶石")
game.splash("而這顆寶石由四位守護者保護著")
game.splash("有一天")
game.splash("有一隻邪惡的龍為了奪取世界萬物的力量將寶石搶走")
game.splash("造成世界生物突變")
game.splash("導致他們變得會攻擊人們")
game.splash("而四位守護者為了讓世界恢復平衡")
game.splash("因此他們展開了一連串的冒險")
game.splash("目的是為了奪回寶石")
game.showLongText("選角小提示", DialogLayout.Bottom)
game.showLongText("一共有四個角色", DialogLayout.Bottom)
game.showLongText("請操控方向鍵移動箭頭", DialogLayout.Bottom)
game.showLongText("箭頭觸碰到的角色", DialogLayout.Bottom)
game.showLongText("即為您選擇的角色", DialogLayout.Bottom)
game.showLongText("開始選角色吧!", DialogLayout.Bottom)
劍士 = sprites.create(img`
    ........................
    .......fff..............
    ...ffff222f........fff..
    ..f22222222f......fccf..
    .fffffffffff.....fcccf..
    .fdddddddfff....fcccf...
    ffdddd1fdddf.f.fcccf....
    fddddd1fdddffefcccf.....
    .fdddddddddffeeccf......
    ..ffffffffffffeef.......
    ...f22f222fddefeef......
    ...f22ffffffff.ff.......
    ...f222222f.............
    ...ffffffff.............
    ...666.666..............
    ...ff..ff...............
    ...fff.fff..............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.player劍士)
劍士.setPosition(89, 92)
射手 = sprites.create(img`
    ........................
    ......fffff.............
    .....feeeeef..ff........
    ....feeeeeeef.f.f.......
    ....feeeeeeef.f..f......
    ....feeeedddf.f...f.....
    ....feeee1fdf.f...f.f...
    ..1.feeed1fdf.1fffffff..
    .1.1feffddddfdf...f.f...
    ..1feef86fffdff..f......
    ..ffffff886ff.f.f.......
    ...ffffdf86f..ff........
    ...ffffdf6ff............
    .....fdf868f............
    ......ff88f.............
    .......f668f............
    .......f868f............
    .......f88ff............
    .......fff..............
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.player射手)
射手.setPosition(184, 90)
魔法師 = sprites.create(img`
    ........ffff............
    ......ffccccff..........
    .....fccccccccf.........
    ....fcccccccccf.........
    ....ffffcccccccf........
    .......fccccccccffff....
    ......fccccccccccccf....
    .....ffccccccccccff.....
    ....ffcccccccffff.......
    ....fccccffffdddf..fff..
    .....ffffd1fd1fdf..fa...
    .......ffd1fd1fdf..ff...
    ......fffdddddddff..f...
    ......ffffffffffff..f...
    ........fcccfccf....f...
    ........fcccfccfbbbdf...
    .......ffccfbfcff...f...
    .....fffcccfbfccfff.f...
    ....ffccccfbbbfcccf.f...
    ....fccccfbbbbbfcff.f...
    ....ffffffffffffff......
    ........fff.fff.........
    ........ff..ff..........
    ........................
    `, SpriteKind.player魔法師)
魔法師.setPosition(277, 85)
槍手 = sprites.create(img`
    ........................
    .......fff..............
    ......feeef.............
    ....ffeeeefff...........
    ...fefeeeefeff..........
    ..feeffeeffeeef.........
    ..feeeffffeeeef.........
    ..ffeeeeeeeeef..........
    ...fffffffffff..........
    ....555555ddd...........
    ....55d551fdd......f....
    .....5d5d1fdd...fffff...
    .....5ddddddd..fffe.....
    .....ffffffffffddf......
    ....feeeeeeeeefdf.......
    ...feeeeeeeeefff........
    ..feeeeeeeeeff..........
    .fddffeeeeeef...........
    .fff.feeeeeef...........
    .fe...ffffff............
    ff....eeeeee............
    .f....ee..ee............
    ......ff..ff............
    ......fff.fff...........
    `, SpriteKind.player槍手)
槍手.setPosition(377, 85)
箭頭 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 1 . . . . . . 
    . . . . . . 1 1 1 1 . . . . . . 
    . . . . . . 1 1 1 1 . . . . . . 
    . . . . . . 1 1 1 1 . . . . . . 
    . . . . . . 1 1 1 1 . . . . . . 
    . . . . . . 1 1 1 1 . . . . . . 
    . . . . . . 1 1 1 1 . . . . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . . . 1 1 1 1 . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.player箭頭)
箭頭.setPosition(89, 50)
controller.moveSprite(箭頭)
scene.cameraFollowSprite(箭頭)
旗子 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . f 2 . . . . . . . 
    . . . . . . . f 2 2 2 . . . . . 
    . . . . . . . f 2 2 2 2 . . . . 
    . . . . . . . f 2 2 2 2 2 2 . . 
    . . . . . . . f 2 2 2 2 2 2 2 . 
    . . . . . . . f 2 2 2 2 2 . . . 
    . . . . . . . f 2 2 2 . . . . . 
    . . . . . . . f 2 . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . f f f f f f f f f f f f . . 
    . f f f f f f f f f f f f f f . 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.旗子)
旗子.setPosition(470, 90)
旗子.setFlag(SpriteFlag.Invisible, true)
info.setScore(0)
info.setLife(5)
