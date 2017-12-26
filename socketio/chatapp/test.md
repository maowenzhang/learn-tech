@startuml

scale 1

actor Alice
actor Bob
Alice -> Bob: auth request
Alice <-- Bob: auth response

participant YangGe as YG #99FF99

Alice -> YG: love you

@enduml