# Hayvanat-Bah-esi-App

## Miras (Inheritance) ve Override Açıklaması

Miras zincirinde işleyiş şöyle çalışır:

Bir nesne bir metodu çağırdığında, önce kendi sınıfında arar.
Alt sınıfta o metodun kişisel (override edilmiş) versiyonu varsa → onu çalıştırır.
Eğer alt sınıfta yoksa, üst sınıfa çıkar, oradaki ortak metodu çalıştırır.

Yani:

- Override varsa: Kişiye özel davranış
- Override yoksa: Üst sınıftaki genel davranış

Örnek bağlamda: `Kedi` sınıfında `sesCikar()` yazdığın için özel ses çıkıyor.
Yazmasaydın `Hayvan` sınıfındaki genel ses çalışacaktı.

Özet:
Alt sınıf metodu özelleştirirse o çalışır, özelleştirmezse üst sınıftaki şablon devreye girer.

Bu şekilde OOP mantığını anlamak isteyenlerin inceleyebileceği bir JavaScript kod parçasıdır.
