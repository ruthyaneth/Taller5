/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uptc.sw2.taller5.servicio;

import co.edu.uptc.sw2.taller5.dto.FacultadDTO;
import co.edu.uptc.sw2.taller5.dto.ProfesorDTO;
import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.QueryParam;

/**
 *
 * @author YOHAN TALON 00
 */
public class ProfesorServicio {
    
    /**
     * retorna una lista con los Facultad que se encuentran en la base de datos
     *
     * @return retorna una lista de FacultadDTO
     * @generated
     */
    @GET
    public List<ProfesorDTO> obtenerTodosProfesor() {
        return ProveedorInformacion.instance().obtenerTodos(ProfesorDTO.class);
    }

    /**
     * @param id identificador del elemento Facultad
     * @return Facultad del id dado
     * @generated
     */
    @GET
    @Path("/{id}")
    public ProfesorDTO obtenerProfesor(@PathParam("id") Long id) {
        return (ProfesorDTO) ProveedorInformacion.instance().obtener(ProfesorDTO.class, id);
    }

    /**
     * almacena la informacion de Facultad
     *
     * @param dto Facultad a guardar
     * @return Facultad con los cambios realizados por el proceso de guardar
     * @generated
     */
    @POST
    public ProfesorDTO guardarProfesor(ProfesorDTO dto) {
        return (ProfesorDTO) ProveedorInformacion.instance().guardar(dto);
    }

    /**
     * elimina el registro Facultad con el identificador dado
     *
     * @param id identificador del Facultad
     * @generated
     */
    @DELETE
    @Path("/{id}")
    public void borrarProfesor(@PathParam("id") Long id) {
        ProveedorInformacion.instance().eliminar(ProfesorDTO.class, id);
    }
    
    @GET
    @Path("/consulta")
    public List<ProfesorDTO> consultarProfesor(@QueryParam("nombre") String nombre){
        List<ProfesorDTO> lista=obtenerTodosProfesor();
        List<ProfesorDTO> respuesta=new ArrayList<>();
        for(ProfesorDTO f:lista){
            if(f.getNombres().toUpperCase().contains(nombre.toUpperCase())){
                respuesta.add(f);
            }
        }
        return respuesta;
    }
    
}
