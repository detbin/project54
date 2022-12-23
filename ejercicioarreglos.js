listcompra= ['pan','huevos','pollo','carne','azucar','limones','verduras']
console.log(listcompra)
listcompra.push('Aceite de Girasol')
console.log(listcompra)
listcompra.pop('Aceite de Girasol')
console.log(listcompra)
const listapelis = [
{Titulo:'La Vida es Bella',Director:'Roberto Benigni',Fecha:1997},
{Titulo:'Forest Gump',Director:'Robert Zemeckis',Fecha:1994},
{Titulo:'Los Intocables',Director:'Didier Bivel',Fecha:2019} 
]
console.log(listapelis.filter(obj=>obj.Fecha>2010))
const directores=listapelis.map((valor,indice) =>{
     valor=listapelis[indice].Director
     return valor
})
const titulos=listapelis.map((valor,indice) =>{
    valor=listapelis[indice].Titulo
    return valor
})
console.log(directores)
console.log(titulos)
titdir=titulos.concat(directores)
console.log(titdir)
dirtit=[...directores,...titulos]
console.log(dirtit)