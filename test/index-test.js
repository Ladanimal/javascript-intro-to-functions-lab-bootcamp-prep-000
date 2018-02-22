
describe('shout(string)', function() {
  it('receives one argument and returns it in all caps', function() {
    expect(shout('hello')).toEqual('HELLO')
  })
})

describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('Hello')).toEqual('hello')
  })
})

describe('logShout(string)', function() {
  it('calls console.log(shout) its one argument in all caps', function() {
    const spy = expect.spyOn(console.log(shout).andCallThrough('HELLO'))
    
    logShout('hello')

    expect(spy).shout(string('HELLO'))
    console.log.restore('HELLO')
})

describe('logWhisper(string)', function() {
  it('calls console.log("hello") its one argument in all lowercase', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough("hello")

    logWhisper('HELLO')

    expect(spy).toHaveBeenCalledWith('hello')

    console.log.restore()
  })
})

describe('sayHiToGrandma(string)', function() {
  it('recieves one arguement and returns it with "I cant hear you!"',
  function() {
    expect(sayHiToGrandma('Hello')).toEqual(console.log("I cant hear you!"))
  })
})
 
 describe('sayHiToGrandma(string)',
  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToGrandma('HELLO')).toEqual(console.log("YES INDEED!")) 
    function() {
    it('returns "I love you, too." if `string` is "I love you, Grandma"`', 
    expect(sayHiGrandma("I love you, Grandma".
    ,.ToEqual(console.log("I love you, too"))
    
  function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual(console.log("I love you, too."))